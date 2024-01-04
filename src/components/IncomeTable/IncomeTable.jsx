import IncomeItem from "../IncomeItem/IncomeItem";
import "./IncomeTable.css";

const IncomeTable = ({ income = [], activeIndex, setActiveIndex }) => {
  const incomeItems = income.map((income, i) => (
    <IncomeItem
      income={income}
      key={income.id}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      index={i}
    />
  ));

  return (
    <table className="table-success flex-item">
      <thead>
        <tr>
          <th className="header-cell"> Source Name</th>
          <th className="header-cell"> Amount</th>
          <th className="header-cell"> Date</th>
          <th className="header-cell"> Delete Income</th>
        </tr>
      </thead>
      <tbody>{incomeItems}</tbody>
    </table>
  );
};

export default IncomeTable;
