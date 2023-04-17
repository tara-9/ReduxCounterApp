import {configureStore} from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter:true}

console.log(initialState)

function counterReducer(state = initialState, action) {
  console.log("Inside Counter Reducer Method")
  // Check to see if the reducer cares about this action
  if (action.type === 'increment') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      counter: state.counter + 1
    }
  }

  if (action.type === 'decrement') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      counter: state.counter - 1
    }
  }

  if(action.type === 'increase') {
    return{
      ...state,
      counter: state.counter + action.amount
    }
  }

  if(action.type === 'toggle') {
    return{
      ...state,
      showCounter: !state.showCounter
    }
  }
  // otherwise return the existing state unchanged
  return state

  
}



const store = configureStore({reducer: counterReducer})

export default store

