import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses";
import numeral from 'numeral'


export const ExpensesSummary = ({expenseCount,expenseTotal}) => {
const expenseWord=expenseCount===1 ? 'expense':'expenses';
const formatedExpensesTotal=numeral(expenseTotal/100).format('$0,0.00')
    return(

    <div>
  ExpensesSummary
    <p>viewing {expenseCount} {expenseWord} totaling {formatedExpensesTotal}</p>
    </div>
  );}


 
const mapStateToProps=(state)=>{
    const visibleExpenses=selectExpenses(state.expenses,state.filters)
    return{
        expenseCount:visibleExpenses.length,
        expenseTotal:selectExpensesTotal(visibleExpenses)//the expenselist component now has access to the name
    }
    };//get the function back
    //the first argument is what kind of information we wanna connect
    
    
    export default connect(mapStateToProps)(ExpensesSummary);
    