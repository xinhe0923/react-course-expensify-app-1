import uuid from "uuid";
import database from "../firebase/firebase";

//component calls option operator
//action generator return object
//component dispatches object
//redux store changes

export const addExpense = (expense) => {
  return {
    type: "ADD_EXPENSE",
    expense,
  };
};

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = {
      description,
      note,
      amount,
      createdAt,
    };
    return database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );//by return this we can toss on then to chain on in test file
      });
    //this function gets called internally be redux
    //gets called with dispatch
    //write some data to firebase, wait data to crrectly sync
    //use dispatch to add expense,
    //then the redux store reflect those changes
  };
};

export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
