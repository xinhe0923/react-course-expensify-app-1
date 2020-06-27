import { createStore } from "redux";

//reducers are pure functions (not using/change outside of function)
//never change state or action
const incrementCount=({incrementBy=1}={})=>({
    //if there isn't object, the object will be set to {}
    //if there is object, but havnt been set value, the value will be default 1
    //if there is object, set value, then the new incrementby will be set 
       type:'INCREMENT',
       incrementBy
})
const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy

})
const setCount=({count})=>({
    type:'SET',
    count
})
const resetCount=({}={})=>({
    type:'RESET',
    count:0
})



const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
     
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;

      return {
        count: state.count - decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
      case "SET":
        return {
            count:action.count
        }
    default:
      return state;
  }
};
const store=createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
}); //function gets called every single time store got changes

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5,
// }); //convention to use upper)
store.dispatch(incrementCount({incrementBy:5}))

// unsubscribe()//from here the subscribe will not be called

store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:10}));



store.dispatch(setCount({count:6}))

// console.log(store.getState())
