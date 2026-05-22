import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "leads.db")

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # 1. Visa Assessments table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS assessments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            email TEXT NOT NULL,
            contact_number TEXT NOT NULL,
            purpose TEXT NOT NULL,
            destination TEXT NOT NULL,
            highest_qualification TEXT NOT NULL,
            work_experience TEXT NOT NULL,
            cv_path TEXT,
            message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    
    # 2. Counselling Bookings table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS counsellings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            phone_number TEXT NOT NULL,
            email TEXT NOT NULL,
            city TEXT NOT NULL,
            highest_qualification TEXT NOT NULL,
            work_experience TEXT NOT NULL,
            degree_type TEXT NOT NULL,
            interested_courses TEXT NOT NULL,
            priorities TEXT NOT NULL,
            budget TEXT,
            queries TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    
    # 3. Quick Enquiries table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS enquiries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone_number TEXT NOT NULL,
            email TEXT NOT NULL,
            city TEXT NOT NULL,
            country TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    
    conn.commit()
    conn.close()

def save_assessment(data, cv_path=None):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO assessments (
            first_name, last_name, email, contact_number, purpose, 
            destination, highest_qualification, work_experience, cv_path, message
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        data.get("first_name"),
        data.get("last_name"),
        data.get("email"),
        data.get("contact_number"),
        data.get("purpose"),
        data.get("destination"),
        data.get("highest_qualification"),
        data.get("work_experience"),
        cv_path,
        data.get("message")
    ))
    conn.commit()
    inserted_id = cursor.lastrowid
    conn.close()
    return inserted_id

def save_counselling(data):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO counsellings (
            first_name, last_name, phone_number, email, city, 
            highest_qualification, work_experience, degree_type, 
            interested_courses, priorities, budget, queries
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        data.get("first_name"),
        data.get("last_name"),
        data.get("phone_number"),
        data.get("email"),
        data.get("city"),
        data.get("highest_qualification"),
        data.get("work_experience"),
        data.get("degree_type"),
        data.get("interested_courses"),
        data.get("priorities"),
        data.get("budget"),
        data.get("queries")
    ))
    conn.commit()
    inserted_id = cursor.lastrowid
    conn.close()
    return inserted_id

def save_enquiry(data):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO enquiries (
            name, phone_number, email, city, country
        ) VALUES (?, ?, ?, ?, ?)
    """, (
        data.get("name"),
        data.get("phone_number"),
        data.get("email"),
        data.get("city"),
        data.get("country")
    ))
    conn.commit()
    inserted_id = cursor.lastrowid
    conn.close()
    return inserted_id

# Initialize database on module load
init_db()
