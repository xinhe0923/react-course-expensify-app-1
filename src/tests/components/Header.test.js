import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";
import { startLogin } from "../../actions/auth";


let startLogout,wrapper;

beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<Header startLogout={startLogout} />);
});

test("should render header correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("shoudl call startLogout on button click ", () => {
  wrapper.find("button").simulate("click");
  expect(startLogout).toHaveBeenCalled();
});
