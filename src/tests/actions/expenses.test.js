import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

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
  const expenseData = {
    description: "rent",
    amount: 10000,
    createdAt: 1000,
    note: "this was last month rent",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
      type:'ADD_EXPENSE',
      expense:{
          ...expenseData,
          id:expect.any(String)
      }
  })
});
test("should set up the add expense object with default value", () => {
    const expenseDefault = {
        description : "",
        note :"",
        amount : 0,
        createdAt : 0,
      };
      const action=addExpense();
      expect(action).toEqual({
          type:'ADD_EXPENSE',
          expense:{
              ...expenseDefault,
              id:expect.any(String)
          }
      })
});
