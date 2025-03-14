// store.js
import create from 'zustand'

const useStore = create(set => ({
    count: 0,
    increment: () => set(state => ({ count: state.count + 1 })),
    decrement: () => set(state => ({ count: state.count - 1 }))
}));

export default useStore

// CounterComponent.jsx
import React from 'react'
import useStore from './store'

function Counter() {
    const { count, increment, decrement } = useStore()

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter