import React, { createContext, useReducer } from 'react'

// Creating the context
const ShoppingCartContext = createContext()

// Actions for state reduction
const actionTypes = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    CLEAR_CART: 'CLEAR_CART'
}

// Reducer function
function shoppingCartReducer(state, action) {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return { ...state, items: [...state.items, action.payload] }
        case actionTypes.REMOVE_ITEM:
            return { ...state, items: state.items.filter(item => item.id !== action.payload.id) }
        case actionTypes.CLEAR_CART:
            return { ...state, items: [] }
        default:
            return state
    }
}

// Provider Component
function ShoppingCartProvider({ children }) {
    const initialState = { items: [] }

    const [state, dispatch] = useReducer(shoppingCartReducer, initialState)

    // Functions to manipulate state
    const addItem = item => {
        dispatch({ type: actionTypes.ADD_ITEM, payload: item })
    }

    const removeItem = itemId => {
        dispatch({ type: actionTypes.REMOVE_ITEM, payload: { id: itemId } })
    }

    const clearCart = () => {
        dispatch({ type: actionTypes.CLEAR_CART })
    }

    // Context value
    const value = {
        cart: state.items,
        addItem,
        removeItem,
        clearCart
    }

    return (
        <ShoppingCartContext.Provider value={value}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }