import logReducer from "../../reducers/auth";

test("should set login reducer", () => {
  const action = {
    type: "LOGIN",
    uid: "1",
  };
  const state = logReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("should set logout reducer", () => {
  const action = {
    type: "LOGOUT",
  };
  const state = logReducer({uid:'anything'}, action);
  expect(state).toEqual({});
});
