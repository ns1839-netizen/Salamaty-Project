# 🩺 Salamaty Project – Backend (Authentication Module)

This is the backend service for **Salamaty**, a healthcare management system.  
The current version includes **user authentication (register/login)** built with **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

- User registration (`/api/users/register`)
- User login (`/api/users/login`)
- Password hashing using **bcrypt**
- Token-based authentication using **JWT**
- MongoDB integration with **Mongoose**
- `.env` configuration support

---

## 🧩 Technologies Used

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT (JSON Web Token)  
- Bcrypt  
- Nodemon  
- Dotenv

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ns1839-netizen/Salamaty-Project.git
   cd Salamaty-Project
   
Install dependencies
npm install
*************************************************
Create .env file in the project root and add:
PORT=3000
MONGO_URI=mongodb://localhost:27017/salamaty
JWT_SECRET=salamaty_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
///////////////////////////////////////////////////////
Run the server
npm run dev
