import { createStore, combineReducers ,applyMiddleware,compose} from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import thunk from 'redux-thunk';

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;

export default () => {
  //store creation
  const store = createStore(
    combineReducers({
      expenses: expensesReducer, //get the array moved off of the actual store
      //and put into a property
      filters: filtersReducer,
    }),
    composeEnhancers( applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ); //the key is root state name,value is reducer to manage it
  return store;
};
