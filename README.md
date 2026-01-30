# Expense Tracker

A full-stack Expense Tracker application built using **HTML, CSS, JavaScript (Frontend)** and **Node.js + Express (Backend)**.  
It allows users to add expenses and income, view total calculations, and generate weekly/monthly reports with pie-chart visualization.

---

## Features

### Frontend
- Add **Spent** and **Gained** transactions
- View total spent, total gained, and net profit
- Weekly and monthly reports
- Pie chart visualization using Chart.js
- Clean and responsive UI

### Backend
- REST API built with Express.js
- In-memory transaction storage
- Supports:
  - `GET /transactions`
  - `POST /transactions`
  - `DELETE /transactions/:id`
- CORS enabled for frontend communication

---

## Project Structure

Expense-Tracker/
│
├── index.html # Frontend UI
├── README.md # Project documentation
├── .gitignore
│
└── backend/
├── index.js # Express server
├── package.json

yaml
Copy code

---

## How to Run the Project Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Archid-Haque/Expense-Tracker.git
cd Expense-Tracker
2️⃣ Run the Backend
bash
Copy code
cd backend
npm install
node index.js
Backend will start at:

arduino
Copy code
http://localhost:5000
To check backend:

bash
Copy code
http://localhost:5000/transactions
3️⃣ Run the Frontend
Open the project folder in VS Code

Right-click index.html

Click Open with Live Server

Frontend will open at:

arduino
Copy code
http://127.0.0.1:5500/index.html
⚠️ Important:
Do NOT open index.html directly from File Explorer.
Always use Live Server, otherwise the backend API will not connect.

API Endpoints
Method	Endpoint	Description
GET	/transactions	Get all transactions
POST	/transactions	Add a new transaction
DELETE	/transactions/:id	Delete a transaction

Tech Stack
Frontend: HTML, CSS, JavaScript, Chart.js

Backend: Node.js, Express.js

Tools: VS Code, Live Server, GitHub

Future Improvements
Database integration (MongoDB / PostgreSQL)

User authentication

Category-wise analytics

Deployment (Render / Railway / Vercel)

Author
Archid Haque
GitHub: https://github.com/Archid-Haque

⭐ If you like this project, consider giving it a star!
