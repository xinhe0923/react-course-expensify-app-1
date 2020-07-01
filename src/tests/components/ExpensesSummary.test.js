import React from "react";
import { shallow } from "enzyme";

import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";



test('should render expenseSummary with 1 expense',()=>{
    const wrapper=shallow(<ExpensesSummary expenseCount={1} expenseTotal={235} />)
    expect(wrapper).toMatchSnapshot();

})

test('should render expenseSummary with mutiple expenses',()=>{
    const wrapper=shallow(<ExpensesSummary expenseCount={3} expenseTotal={2359} />)
    expect(wrapper).toMatchSnapshot();

})