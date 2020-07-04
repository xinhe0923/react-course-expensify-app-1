import uuid from "uuid";
import database from "../firebase/firebase";
import expenses from "../tests/fixtures/expenses";
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
        ); //by return this we can toss on then to chain on in test file
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

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database
      .ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({id})); //by return this we can toss on then to chain on in test file
      });
  };
};

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

//SET_
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
}); //change redux store

export const startSetExpenses = () => {
  return (dispatch) => {
    return database
      .ref("expenses")
      .once("value")
      .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
// export const startSetExpenses;//fetch to firebase
