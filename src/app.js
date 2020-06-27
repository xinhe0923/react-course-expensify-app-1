import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configurStore from "./store/configureStore";

import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
// import expenseReducer from './reducers/expenses'

const store = configurStore();

const water_bill = store.dispatch(
  addExpense({ description: "water bill", amount: 230,createdAt:158829840000})
);

const rent = store.dispatch(
  addExpense({ description: "rent", amount: 1400,createdAt:-1000})

);

const gas_bill = store.dispatch(
  addExpense({ description: "gas bill", amount: 111, createdAt: -100 })
);

// store.dispatch(setTextFilter('water'))

// store.dispatch(setTextFilter('age'))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

// store.dispatch(setTextFilter('water'))
// store.dispatch(getVisibleExpense())

//normalize ensures all browser starts at the same base
const jsx = (
  <Provider store={store}>
    <AppRouter />
    {/*you can use this component nested inside of the provider*/}
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
