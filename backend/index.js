const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// IN-MEMORY STORAGE
let transactions = [];
let idCounter = 1;

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("✅ Expense Tracker Backend is running");
});

// GET ALL TRANSACTIONS
app.get("/transactions", (req, res) => {
  res.json(transactions);
});

// ADD TRANSACTION
app.post("/transactions", (req, res) => {
  const { amount, type } = req.body;

  if (!amount || !type) {
    return res.status(400).json({ error: "Invalid data" });
  }

  const transaction = {
    id: idCounter++,
    amount,
    type,
    date: new Date()
  };

  transactions.push(transaction);
  res.json(transaction);
});

// DELETE TRANSACTION
app.delete("/transactions/:id", (req, res) => {
  const id = Number(req.params.id);
  transactions = transactions.filter(t => t.id !== id);
  res.json({ message: "Deleted" });
});

// START SERVER
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});

