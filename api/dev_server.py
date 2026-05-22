import http.server
import socketserver
import json
import os
import sys
import uuid

# Ensure the root of the project is in path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from api.database import save_assessment, save_counselling, save_enquiry, get_db_connection

PORT = 8000
UPLOAD_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)

def parse_multipart(body_bytes, boundary):
    # Split by boundary
    boundary_bytes = b'--' + boundary.encode('utf-8')
    parts = body_bytes.split(boundary_bytes)
    form_data = {}
    file_data = None
    file_name = None
    
    for part in parts:
        # Strip padding
        if not part or part == b'\r\n' or part.strip() == b'' or part.startswith(b'--'):
            continue
            
        # Separate headers and content
        if b'\r\n\r\n' not in part:
            continue
            
        headers_chunk, content_chunk = part.split(b'\r\n\r\n', 1)
        
        # Remove trailing \r\n from content
        if content_chunk.endswith(b'\r\n'):
            content_chunk = content_chunk[:-2]
            
        headers_str = headers_chunk.decode('utf-8', errors='ignore')
        
        # Parse content-disposition
        if 'Content-Disposition:' in headers_str:
            # Extract name
            name_start = headers_str.find('name="')
            if name_start != -1:
                name_start += 6
                name_end = headers_str.find('"', name_start)
                name = headers_str[name_start:name_end]
                
                # Check if it is a file
                filename_start = headers_str.find('filename="')
                if filename_start != -1:
                    filename_start += 10
                    filename_end = headers_str.find('"', filename_start)
                    filename = headers_str[filename_start:filename_end]
                    
                    if filename:
                        file_data = content_chunk
                        file_name = filename
                else:
                    form_data[name] = content_chunk.decode('utf-8', errors='ignore')
                    
    return form_data, file_name, file_data

class DevHTTPRequestHandler(http.server.BaseHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS for frontend Vite server on port 5173
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200, "OK")
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/health':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"status": "healthy", "service": "Immigration Hub Dev API"}).encode())
            return
            
        elif self.path.startswith('/api/leads'):
            # Basic lead dashboard check
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            
            try:
                conn = get_db_connection()
                cursor = conn.cursor()
                
                cursor.execute("SELECT * FROM assessments ORDER BY id DESC")
                assessments = [dict(row) for row in cursor.fetchall()]
                
                cursor.execute("SELECT * FROM counsellings ORDER BY id DESC")
                counsellings = [dict(row) for row in cursor.fetchall()]
                
                cursor.execute("SELECT * FROM enquiries ORDER BY id DESC")
                enquiries = [dict(row) for row in cursor.fetchall()]
                
                conn.close()
                
                self.wfile.write(json.dumps({
                    "assessments": assessments,
                    "counsellings": counsellings,
                    "enquiries": enquiries
                }).encode())
            except Exception as e:
                self.wfile.write(json.dumps({"error": str(e)}).encode())
            return
            
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b"Not Found")

    def do_POST(self):
        if self.path == '/api/assessment':
            try:
                content_type = self.headers.get('content-type', '')
                if 'multipart/form-data' not in content_type:
                    self.send_response(400)
                    self.end_headers()
                    self.wfile.write(json.dumps({"detail": "Content-Type must be multipart/form-data"}).encode())
                    return
                
                # Find boundary
                boundary = ""
                for part in content_type.split(';'):
                    if 'boundary=' in part:
                        boundary = part.split('boundary=')[1].strip()
                        
                if not boundary:
                    self.send_response(400)
                    self.end_headers()
                    self.wfile.write(json.dumps({"detail": "Boundary not found in Content-Type"}).encode())
                    return

                # Read body bytes
                content_length = int(self.headers.get('Content-Length', 0))
                body_bytes = self.rfile.read(content_length)
                
                form_data, file_name, file_bytes = parse_multipart(body_bytes, boundary)
                
                # Process CV file if uploaded
                cv_path = None
                if file_name and file_bytes:
                    ext = os.path.splitext(file_name)[1]
                    unique_filename = f"{uuid.uuid4()}{ext}"
                    cv_path = os.path.join(UPLOAD_DIR, unique_filename)
                    with open(cv_path, 'wb') as f:
                        f.write(file_bytes)
                    cv_path = f"api/uploads/{unique_filename}"
                
                inserted_id = save_assessment(form_data, cv_path)
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({
                    "success": True,
                    "message": "Visa assessment request received successfully!",
                    "id": inserted_id
                }).encode())
                
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"detail": str(e)}).encode())
            return
            
        elif self.path in ('/api/counselling', '/api/enquiry'):
            try:
                content_length = int(self.headers.get('Content-Length', 0))
                post_data = self.rfile.read(content_length)
                payload = json.loads(post_data.decode('utf-8'))
                
                if self.path == '/api/counselling':
                    # Save to counsellings table
                    inserted_id = save_counselling(payload)
                    msg = "Counselling session booked successfully!"
                else:
                    # Save to enquiries table
                    inserted_id = save_enquiry(payload)
                    msg = "Enquiry submitted successfully!"
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({
                    "success": True,
                    "message": msg,
                    "id": inserted_id
                }).encode())
                
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"detail": str(e)}).encode())
            return
            
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b"Not Found")

def run():
    print(f"Starting Failsafe Developer HTTP Server on port {PORT}...")
    handler = DevHTTPRequestHandler
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        print(f"Developer server is live at http://localhost:{PORT}/")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
        finally:
            httpd.server_close()

if __name__ == '__main__':
    run()
