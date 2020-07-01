import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import getTotalAmount from '../../selectors/expenses-total'


test('shold 0 if no expenses',()=>{
    
    const result=getTotalAmount([])
    expect(result).toBe(0)//the latest comes first
})

test('shold get the total value',()=>{
    
    const result=getTotalAmount([expenses[0]])
    expect(result).toBe(195)//the latest comes first
})
test('shold get the total value',()=>{
    
    const result=getTotalAmount(expenses)
    expect(result).toBe(24195)//the latest comes first
})