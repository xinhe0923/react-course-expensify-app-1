import React from "react";
import {connect} from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";


export const ExpenseList = (props) => (

  <div>
    {props.expenses.length===0? (
<p>no expenses</p>
    ):(props.expenses.map((item)=>{
      return <ExpenseListItem key={item.id} {...item}  />
          }))}
    {/* <h1>Expense List</h1>

    {props.expenses.map((item)=>{
return <ExpenseListItem key={item.id} {...item}  />
    })} */}
  </div>
);

const mapStateToProps=(state)=>{
return{
    expenses:selectExpenses(state.expenses,state.filters),//the expenselist component now has access to the name
}
};//get the function back
//the first argument is what kind of information we wanna connect


export default connect(mapStateToProps)(ExpenseList);
