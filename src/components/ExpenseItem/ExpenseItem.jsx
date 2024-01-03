import React, { useState } from "react";
import DeleteExpenseForm from "../DeleteExpenseForm/DeleteExpenseForm";
import "./ExpenseItem.css";

const ExpenseItem = ({ expense, activeIndex, setActiveIndex, index }) => {
  const [isPaid, setIsPaid] = useState(false);

  const handlePaid = (e) => {
    setIsPaid(!isPaid);
  };

  const handleActive = () => {
    setActiveIndex(index);
  };

  const btnClass = isPaid ? "btn btn-success" : "btn btn-secondary";
  const activeClass = index === activeIndex ? "active-song" : "";

  return (
    <tr onClick={handleActive} className={`expense-item ${activeClass}`}>
      <td className="item-cell">{expense.name}</td>
      <td className="item-cell">{expense.amount}</td>
      <td className="item-cell">{expense.date}</td>
      <td className="item-cell">{expense.rating}</td>
      <td className="item-cell">
        <button className={btnClass} onClick={handlePaid}>
          {expense.isPaid}
        </button>
      </td>
      <td className="item-cell">
        <DeleteExpenseForm expenseId={expense.id} />
      </td>
    </tr>
  );
};

export default ExpenseItem;
