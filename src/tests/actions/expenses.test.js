import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
import { NULL } from "node-sass";

const uid='thisistestUID'
const defaultAuthState={auth:{uid}}

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, createdAt, amount, note }) => {
    expensesData[id] = { id,description, createdAt, amount, note };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());
}); //runs before each test case, so each test case run from scratch

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    //when you sue array or object, use toEqual
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should remove the expenses from firebases", (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;

  store
    .dispatch(startRemoveExpense({ id}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id,
      });

      return database.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(null);
      done();
    });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123", { note: "new note value" }); //2 arguments, first is id, second is the updates
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: { note: "new note value" },
  });
});

test("should edit the expenses from firebases", (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;
  const updates={note:'update to firebase'}

  store
    .dispatch(startEditExpense(id,updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "EDIT_EXPENSE",
        id,
        updates
      });

      return database.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual({...expenses[2],...updates});
      done();
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
  const store = createMockStore(defaultAuthState);
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

      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with default to database and store", (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0,
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

      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done(); //ensures we set up asynchronise test
    });
});

test("should set up set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});
test("should fetch the expenses from firebases", (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses,
    });
    done();
  });
});
//do not consider it succeed or fail until the done is called
