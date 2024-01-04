import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./HomePage.css";
// Full Calendar Import
import Calendar from "../../components/FullCalendar/FullCalendar";
// Expense Table Import
import ExpenseTable from "../../components/ExpenseTable/ExpenseTable";
import NewExpenseForm from "../../components/NewExpenseForm/NewExpenseForm";
import IncomeTable from "../../components/IncomeTable/IncomeTable";
import NewIncomeForm from "../../components/NewIncomeForm/NewIncomeForm";

const HomePage = () => {
  // The "user" value from this Hook contains user information (id, userName, email) from the decoded token
  // The "token" value is the JWT token sent from the backend that you will send back in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, [token]);

  const fetchExpenses = async () => {
    try {
      let response = await axios.get(
        "https://localhost:5001/api/Expenses/myExpenses/",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setExpenses(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, [expenses]);

  return (
    <div className="container">
      {console.log(user)}
      <h1>Welcome {user.userName}!</h1>

      <div className="tables">
        <ExpenseTable />
        <NewExpenseForm onNewExpense={fetchExpenses} />
        <div>
          <IncomeTable />
          <NewIncomeForm />
        </div>
      </div>
      <div>
        <Calendar />
      </div>
    </div>
  );
};

export default HomePage;
