import React, { useState } from "react";
import TextField from "../TextField/TextField";
import axios from "axios";

const NewIncomeForm = ({ onNewIncome }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      amount,
      date,
    };
    try {
      const response = await axios.post(
        "https://localhost:5001/api/Incomes/",
        formData
      );
      if (response.status === 201) {
        onNewIncome();
      }
    } catch (error) {
      console.warn("Error submitting new income form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-style">
      <h4>Add Income</h4>
      <div className="p-2">
        <TextField label="Name" value={name} onChange={setName} />
        <TextField label="Amount" value={amount} onChange={setAmount} />
        <TextField label="Date" value={date} onChange={setDate} />
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-success" type="submit">
            Add Income
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewIncomeForm;
