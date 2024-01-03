import React from "react";
import "./IncomeItem.css";
import DeleteIncomeForm from "../DeleteIncomeForm/DeleteIncomeForm";

const IncomeItem = ({ income, activeIndex, setActiveIndex, index }) => {
  const handleActive = () => {
    setActiveIndex(index);
  };

  const activeClass = index === activeIndex ? "active-income" : "";

  return (
    <tr onClick={handleActive} className={`income-item${activeClass}`}>
      <td className="item-cell">{income.name}</td>
      <td className="item-cell">{income.amount}</td>
      <td className="item-cell">{income.date}</td>
      <td className="item-cell">
        <DeleteIncomeForm incomeId={income.id} />
      </td>
    </tr>
  );
};

export default IncomeItem;
