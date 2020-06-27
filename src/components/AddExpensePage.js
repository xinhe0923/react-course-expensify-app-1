import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1> AddExpensePage </h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

// const AddExpensePage = (props) => (
//   <div>
//     <h1> AddExpensePage </h1>
//     <ExpenseForm
//       onSubmit={(expense) => {
//         // props.dispatch(addExpense(expense));
//         props.onSubmit(expense);
//         props.history.push("/");
//       }}
//     />
//   </div>
// );

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense)),
});

//extract the expense data from expenseForm because we need to dispatch
//this part of data in 2 files:AddExpensePage,EditExpensePage

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
