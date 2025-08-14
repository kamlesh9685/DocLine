# Doctor Appointment Booking System

A full-stack web application for booking and managing doctor appointments with **role-based dashboards** for **Users**, **Doctors**, and **Admins**.  
The system includes real-time slot checking, online payment integration, and profile management.

---

## 📌 Features

### **User Side**
- **Doctor Browsing & Filtering**: View and filter doctors by specialty.
- **Appointment Booking**: Real-time slot availability for the next 7 days.
- **My Appointments**: View, cancel, and pay for appointments online.
- **Online Payment**: Razorpay integration with secure payment verification.
- **Profile Management**: Update personal details and upload profile picture.

### **Doctor Side**
- **Dashboard**: View earnings, upcoming/past appointments, and patient list.
- **Appointment Control**: Mark appointments as completed or cancelled.
- **Profile Editing**: Update professional details and profile image.
- **Availability Management**: Set availability status.

### **Admin Side**
- **Dashboard**: View total doctors, patients, and appointments.
- **Doctor Management**: View all doctors and change their availability.
- **Appointment Management**: View and cancel any appointment.

---

## 📂 Project Structure
frontend/
src/
pages/ # User-facing pages (Appointment, Doctors, MyAppointments, etc.)
components/ # UI components (Navbar, Footer, etc.)
context/ # App-wide state management (AppContext.jsx)

admin/
src/
pages/ # Admin & Doctor dashboards
components/ # Sidebar, Navbar, etc.
context/ # AdminContext, DoctorContext, AppContext

backend/
controllers/ # Business logic for user, doctor, admin
models/ # Mongoose models (User, Doctor, Appointment)
routes/ # Express routes for each role
middlewares/ # Auth middlewares, multer config

yaml:
---

## 🛠 Tech Stack

| Layer    | Main Tech | Key Features |
|----------|-----------|--------------|
| Frontend | React.js, Vite, Tailwind CSS | Booking, payment, profile, role-based navigation, Context API |
| Admin    | React.js, Context API | Dashboards, doctor management, appointment control |
| Backend  | Node.js, Express.js, MongoDB | Auth, booking, payment, profile, admin/doctor/user separation |
| Payment  | Razorpay API | Secure online payments |
| Storage  | Cloudinary, Multer | Profile picture uploads |

---

## ⚙️ Installation & Setup

### **1. Clone Repository**
```
git clone https://github.com/yourusername/doctor-appointment-system.git
cd doctor-appointment-system
```

Install Dependencies

Backend
cd backend
npm install

Frontend (User)
cd ../frontend
npm install

Admin Panel
cd ../admin
npm install

### 3. Setup Environment Variables
Create `.env` in **backend** folder:
```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


Run the Project
Start Backend
cd backend
npm run dev

Start User Frontend
cd frontend
npm run dev

Start Admin Frontend
cd admin
npm run dev

🚀 Key Functionalities

Role-Based Authentication using JWT.

Doctor Appointment System with real-time slot checking to prevent double bookings.

Payment Gateway Integration with Razorpay for secure online transactions.

Profile Management for both Users and Doctors with Cloudinary image uploads.

Admin Control Panel for monitoring and managing the system.

Responsive Design using Tailwind CSS for mobile and desktop.
```

📷 Screenshots:
<img width="1920" height="1080" alt="Screenshot 2025-08-13 134724" src="https://github.com/user-attachments/assets/b0b89c36-cebb-4e89-8c46-259fa8440b43" />

<img width="1920" height="1020" alt="Screenshot 2025-08-14 133310" src="https://github.com/user-attachments/assets/4a17ddcc-32a8-48c7-b29a-b022b3f70ee1" />

<img width="1920" height="1020" alt="Screenshot 2025-08-14 133318" src="https://github.com/user-attachments/assets/b7c8e70d-7096-4cc6-8f2a-44b1cd460ca9" />

<img width="1920" height="1020" alt="Screenshot 2025-08-14 133338" src="https://github.com/user-attachments/assets/5c1c8db1-93cd-4a20-bfe8-76047ebf9ecd" />

