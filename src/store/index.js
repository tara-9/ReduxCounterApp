import {configureStore} from '@reduxjs/toolkit'

const initialState = { counter: 0 }

function counterReducer(state = initialState, action) {
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
  // otherwise return the existing state unchanged
  return state
}

const store = configureStore({reducer: counterReducer})

export default store

