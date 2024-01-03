import React from "react";
import axios from "axios";

const DeleteExpenseForm = ({ expenseId }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `https://localhost:5001/api/Incomes/${expenseId}`
      );
    } catch (error) {
      console.warn("Error deleting expense:", error);
    }
  };

  return (
    <button
      className="delete-button btn btn-outline-danger"
      onClick={handleDelete}
    >
      Delete Expense
    </button>
  );
};

export default DeleteExpenseForm;
