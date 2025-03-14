// actions.js
export const increment = () => ({ type: 'INCREMENT' })
export const decrement = () => ({ type: 'DECREMENT' })

// reducer.js
const initialState = { count: 0 }

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        default:
            return state;
    }
}

export default counterReducer

// store.js
import { createStore } from 'redux'
import counterReducer from './reducer'

const store = createStore(counterReducer)

export default store;

// CounterComponent.jsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'

function Counter() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default Counter