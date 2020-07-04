import {
  startAddExpense,
  addExpense, 
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
  const expensesData={}
  expenses.forEach(({id,description,createdAt,amount,note})=>{
expensesData[id]={description,createdAt,amount,note}
  })
  database.ref('expenses').set(expensesData).then(()=>done())
})//runs before each test case, so each test case run from scratch

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    //when you sue array or object, use toEqual
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});
test("", () => {
  const action = editExpense("123", { note: "new note value" }); //2 arguments, first is id, second is the updates
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: { note: "new note value" },
  });
});
test("should set up the add expense object with provided data", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

test("should setup add expense action object with provided values", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

test("should add expense to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "This one is better",
    createdAt: 1000,
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with default to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description : "",
    note : "",
    amount : 0,
    createdAt : 0,
  };

  store
    .dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();//ensures we set up asynchronise test
    });

});

test('should set up set expense action object with data',()=>{
const action=setExpenses(expenses);
expect(action).toEqual({
  type:'SET_EXPENSES',
  expenses
})
})
test('should fetch the expenses from firebases',(done)=>{
  const store=createMockStore({});
  store.dispatch(startSetExpenses()).then(()=>{
const actions=store.getActions();
expect(actions[0]).toEqual({
  type:'SET_EXPENSES',
  expenses
})
done()
  })
})
//do not consider it succeed or fail until the done is called 