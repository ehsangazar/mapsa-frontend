import { createStore } from 'redux'


// REDUCER -> CHANGE VALUES
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 }
    case 'DECREMENT':
      return { value: state.value - 1 }
    default:
      return state
  }
}

let store = createStore(counterReducer)

export default store