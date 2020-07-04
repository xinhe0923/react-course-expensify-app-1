import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import { setExpenses } from '../../actions/expenses'

const originalExpense={
    id:'123665',
    description:'orignal',
    note:'',
    amount:100000,
    createdAt:0
}

test('should set default state',()=>{
const state=expensesReducer(undefined,{type:'@@INIT'})
expect(state).toEqual([])
})

test('should remove expense by ID',()=>{
const action={
    type:'REMOVE_EXPENSE',
    id:expenses[1].id
}
const state=expensesReducer(expenses,action)
expect(state).toEqual([expenses[0],expenses[2]])
})

test('should not remove expense if ID not found',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:'-1'
    }
    const state=expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
    })
    
test('should add an expense',()=>{
   
    const newExpense={
        description :"",
        note :"",
        amount : 0,
        createdAt : 0,
    }
    const action={
        type:'ADD_EXPENSE',
        expense:newExpense
    }
    const state=expensesReducer(expenses,action)
    expect(state).toEqual([...expenses,newExpense])
})
test('should edit an expense',()=>{
    const amount=12220000
    const action={
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{amount}
    }
    const state=expensesReducer(expenses,action)
    expect(state[1].amount).toBe(amount)
})
//just test the one was edited, no need to pay ateention to others
test('should not edit if expense not found',()=>{
    const amount=100000
    const action={
        type:'EDIT_EXPENSE',
        id:'99',
        updates:{amount
    }}
    const state=expensesReducer(expenses,action)
    expect(state).toEqual(expenses)

})

test('should set expenses',()=>{
    const action={
        type:'SET_EXPENSES',
        expenses:[expenses[1]]
    }
    const state=expensesReducer(expenses,action)
    expect(state).toEqual([expenses[1]])
  })//expenses passed in should be set as state
  //existed ones are gone
  
