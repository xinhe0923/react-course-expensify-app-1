import {login, logout}  from  "../../actions/auth";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";


const createMockStore = configureMockStore([thunk]);
const uid='123456'

test("should setup login action", () => {

  const action = login(uid);
  expect(action).toEqual({
    //when you sue array or object, use toEqual
    type: "LOGIN",
    uid
  });
});

test("should setup logout action", () => {

    const action = logout();
    expect(action).toEqual({
      //when you sue array or object, use toEqual
      type: "LOGOUT"
      
    });
  });