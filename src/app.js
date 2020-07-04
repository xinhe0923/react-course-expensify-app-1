import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configurStore from "./store/configureStore";
import "./firebase/firebase";
import { startRemoveExpense, startSetExpenses } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
// import './playground/promises'
// import expenseReducer from './reducers/expenses'

const store = configurStore();

// store.dispatch(setTextFilter('water'))

// store.dispatch(setTextFilter('age'))

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

// ReactDOM.render(jsx, document.getElementById("app"));

ReactDOM.render(<p>loading...</p>, document.getElementById("app"));
// // render a loading message the sthe screen until we get data from firebase

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});
//return a promise
