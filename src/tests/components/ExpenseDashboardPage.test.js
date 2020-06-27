import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';


test('should render expenselist item with empty message',()=>{
    
    const wrapper=shallow(<ExpenseDashboardPage  />)
    expect(wrapper).toMatchSnapshot();

})