import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className='list-body'>
    {props.expenses.length === 0 ? (
      <div className='list-item list-item--message'>
        <span>no expenses</span>
      </div>
    ) : (
      props.expenses.map((item) => {
        return <ExpenseListItem key={item.id} {...item} />;
      })
    )}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters), //the expenselist component now has access to the name
  };
}; //get the function back
//the first argument is what kind of information we wanna connect

export default connect(mapStateToProps)(ExpenseList);
