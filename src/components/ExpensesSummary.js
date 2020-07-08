import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectExpensesTotal from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formatedExpensesTotal = numeral(expenseTotal / 100).format("$0,0.00");
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          viewing <span>{expenseCount} </span>
          {expenseWord} totaling <span>{formatedExpensesTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses), //the expenselist component now has access to the name
  };
}; //get the function back
//the first argument is what kind of information we wanna connect

export default connect(mapStateToProps)(ExpensesSummary);
