import selectExpenses from '../../selectors/expenses'
import moment from 'moment'
import expenses from '../fixtures/expenses'

test('should fileter by test value',()=>{
    const filters={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[1]])
})

test('shold filter by startDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0]])//the latest comes first
})

test('shold filter by endDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    }
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[0],expenses[1]])//the latest comes first
})

test('should sort by date',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])//the latest comes first
})

test('shold sort by amount',()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]])//the latest comes first
})
//should filter by endDate
//should sort by date
//should sort by amount