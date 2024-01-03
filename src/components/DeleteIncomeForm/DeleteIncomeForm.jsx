import React from "react";
import axios from "axios";

const DeleteIncomeForm = ({ incomeId }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `https://localhost:5001/api/Incomes/${incomeId}`
      );
    } catch (error) {
      console.warn("Error deleting Income:", error);
    }
  };

  return (
    <button
      className="delete-button btn btn outline-danger"
      onClick={handleDelete}
    >
      Delete Income
    </button>
  );
};

export default DeleteIncomeForm;
