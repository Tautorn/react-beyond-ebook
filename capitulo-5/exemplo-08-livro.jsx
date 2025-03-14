import React, { useContext } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'

function Book({ ebook }) {
    const { addItem, removeItem } = useContext(ShoppingCartContext)
    return (
        <div>
            <button onClick={() => addItem(ebook)}>
                Add to Cart
            </button>
            <button onClick={() => removeItem(ebook.id)}>
                Remove from Cart
            </button>
        </div>
    )
}
export default Book