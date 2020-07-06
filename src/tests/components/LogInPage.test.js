import React from "react";
import { shallow } from "enzyme";
import { LogInPage } from "../../components/LogInPage";

test("should render LogInPage", () => {
  const wrapper = shallow(<LogInPage />);
  expect(wrapper).toMatchSnapshot();
});
test("should call startLogin on button lick", () => {
  const startLogin = jest.fn();

  const wrapper = shallow(<LogInPage startLogin={startLogin} />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("button").simulate("click");

  expect(startLogin).toHaveBeenCalled();
});
