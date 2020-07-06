import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import  ExpensesSummary  from "./ExpensesSummary";
import Header from "./Header";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters/>

    <ExpenseList />
    <ExpensesSummary/>
  </div>
);
export default ExpenseDashboardPage;
