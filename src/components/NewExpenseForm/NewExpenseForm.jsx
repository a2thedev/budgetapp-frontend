import React, { useState } from "react";
import TextField from "../TextField/TextField";
import axios from "axios";
import "./NewExpenseForm.css";

const NewExpenseForm = ({ onNewExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      amount,
      date,
      rating,
    };
    try {
      const response = await axios.post(
        "https://localhost:5001/api/Expenses/",
        formData
      );
      if (response.status === 201) {
        onNewExpense();
      }
    } catch (error) {
      console.warn("error submitting new expense form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-style">
      <h4>Add Expense</h4>
      <div className="p-2">
        <TextField label="Name" value={name} onChange={setName} />
        <TextField label="Amount" value={amount} onChange={setAmount} />
        <TextField
          label="Date (ex: year-month-day)"
          value={date}
          onChange={setDate}
        />
        <TextField label="Rating" value={rating} onChange={setRating} />

        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-success" type="submit">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
