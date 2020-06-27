import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";
import { DateRangePicker } from "react-dates";
import moment from 'moment';


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render expenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});
test("should render expenseListFilters with alt date correctly", () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

//should handle text change
test("test should handle text change", () => {
  wrapper
    .find("input")
    .simulate("change", { target: { value: altFilters.text } });
  expect(setTextFilter).toHaveBeenLastCalledWith(altFilters.text);
});

//should sort by date
test("test should handle sort by date", () => {
  wrapper.find("select").simulate("change", { target: { value: "date" } });
  expect(sortByDate).toHaveBeenCalled();
});

//should sort by amount
test("test should handle sort by date", () => {
  wrapper.find("select").simulate("change", { target: { value: "amount" } });
  expect(sortByAmount).toHaveBeenCalled();
});
//should handle date changes

test("test should handle sort by date", () => {
    const startDate=moment(0).add(4,'yeras')
    const endDate=moment(0).add(0,'years')
  wrapper.find('DateRangePicker').prop("onDatesChange")({
    startDate:startDate,
    endDate: endDate,
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

//should handle date focus changes

test("test should handle focus changes", () => {
    const calenderFocused='endDate';//the option could be closed or one of two states
    wrapper.find('DateRangePicker').prop("onFocusChange")(
        calenderFocused
      );   
      expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
  });