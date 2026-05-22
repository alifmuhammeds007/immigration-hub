from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import os
import shutil
import uuid
import json

from .database import save_assessment, save_counselling, save_enquiry, get_db_connection

app = FastAPI(title="Immigration Hub API", version="1.0.0")

# Enable CORS for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins in development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if os.environ.get("VERCEL"):
    UPLOAD_DIR = "/tmp/uploads"
else:
    UPLOAD_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)

class CounsellingRequest(BaseModel):
    first_name: str
    last_name: str
    phone_number: str
    email: str
    city: str
    highest_qualification: str
    work_experience: str
    degree_type: str
    interested_courses: str
    priorities: str
    budget: Optional[str] = None
    queries: Optional[str] = None

class EnquiryRequest(BaseModel):
    name: str
    phone_number: str
    email: str
    city: str
    country: str

@app.get("/api/health")
def health_check():
    return {"status": "healthy", "service": "Immigration Hub API"}

@app.post("/api/assessment")
async def post_assessment(
    first_name: str = Form(...),
    last_name: str = Form(...),
    email: str = Form(...),
    contact_number: str = Form(...),
    purpose: str = Form(...),
    destination: str = Form(...),
    highest_qualification: str = Form(...),
    work_experience: str = Form(...),
    message: Optional[str] = Form(None),
    cv: Optional[UploadFile] = File(None)
):
    try:
        cv_path = None
        if cv and cv.filename:
            # Generate a secure unique filename
            ext = os.path.splitext(cv.filename)[1]
            unique_filename = f"{uuid.uuid4()}{ext}"
            cv_path = os.path.join(UPLOAD_DIR, unique_filename)
            
            with open(cv_path, "wb") as buffer:
                shutil.copyfileobj(cv.file, buffer)
                
            # Keep relative path for web access or retrieval
            cv_path = f"api/uploads/{unique_filename}"
            
        data = {
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "contact_number": contact_number,
            "purpose": purpose,
            "destination": destination,
            "highest_qualification": highest_qualification,
            "work_experience": work_experience,
            "message": message
        }
        
        inserted_id = save_assessment(data, cv_path)
        
        return {
            "success": True,
            "message": "Visa assessment request received successfully!",
            "id": inserted_id
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/counselling")
def post_counselling(req: CounsellingRequest):
    try:
        inserted_id = save_counselling(req.model_dump())
        return {
            "success": True,
            "message": "Counselling session booked successfully!",
            "id": inserted_id
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/enquiry")
def post_enquiry(req: EnquiryRequest):
    try:
        inserted_id = save_enquiry(req.model_dump())
        return {
            "success": True,
            "message": "Enquiry submitted successfully!",
            "id": inserted_id
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/leads")
def get_leads(secret: Optional[str] = None):
    # Extremely simple validation for demo purposes
    if secret != "hub_admin_2026":
        raise HTTPException(status_code=401, detail="Unauthorized")
        
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM assessments ORDER BY id DESC")
    assessments = [dict(row) for row in cursor.fetchall()]
    
    cursor.execute("SELECT * FROM counsellings ORDER BY id DESC")
    counsellings = [dict(row) for row in cursor.fetchall()]
    
    cursor.execute("SELECT * FROM enquiries ORDER BY id DESC")
    enquiries = [dict(row) for row in cursor.fetchall()]
    
    conn.close()
    
    return {
        "assessments": assessments,
        "counsellings": counsellings,
        "enquiries": enquiries
    }
