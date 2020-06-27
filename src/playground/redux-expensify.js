import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => {
  console.log('1')
  return(
  {
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
})};

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      console.log('2')

      return [...state, action.expense]; //dont change original state
    case "REMOVE_EXPENSE":
      // console.log(action.id)

      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch =
      typeof startDate !== "number" || expense.createdAt >= startDate;
    //if startdate is undefined, not consider it to filter
    const endDateMatch =
      typeof endDate !== "number" || expense.createdAt <= endDate;
    const textMatch =
      
      expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b)=>{
   if(sortBy==='date'){
       return a.createdAt<b.createdAt ? 1 : -1  
   }
   if (sortBy==='amount'){
       return a.amount<b.amount ? 1:-1
   }
  })
};
//store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer, //get the array moved off of the actual store
    //and put into a property
    filters: filtersReducer,
  })
); //the key is root state name,value is reducer to manage it

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  // console.log(visibleExpenses);
});
const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 22, createdAt: -1000 })
);
// const expenseTwo = store.dispatch(
//   addExpense({ description: "coffee", amount: 111, createdAt: -100 })
// );
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}))
// //the first is id, the second is the object
// store.dispatch(setTextFilter("e"));
// store.dispatch(setTextFilter())
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(7125));
// store.dispatch(setEndDate(125));

const demoState = {
  expenses: [
    {
      id: "random1",
      description: "janurary rent",
      note: "this was the final payment for that address",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent", //we can search the description in note for matches
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined,
    //so we only show expenses whoes createdAt property between this two date
  },
};
