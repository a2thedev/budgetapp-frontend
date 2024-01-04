import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseTable.css";

const ExpenseTable = ({ expense = [], activeIndex, setActiveIndex }) => {
  const expenseItems = expense.map((expense, i) => (
    <ExpenseItem
      expense={expense}
      key={expense.id}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      index={i}
    />
  ));

  return (
    <table className="table-success flex-item">
      <thead>
        <tr>
          <th className="header-cell">Expense</th>
          <th className="header-cell"> Amount </th>
          <th className="header-cell"> Date</th>
          <th className="header-cell"> Rating</th>
          <th className="header-cell">Paid</th>
          <th className="header-cell">Delete Expense</th>
        </tr>
      </thead>
      <tbody>{expenseItems}</tbody>
    </table>
  );
};

export default ExpenseTable;
