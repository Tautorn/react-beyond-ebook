import React, { useContext } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'

function ShoppingCart() {
    const { cart, clearCart } = useContext(ShoppingCartContext)

    // Função para enviar os dados do carrinho para a API
    const handlePurchase = async () => {
        try {
            const response = await fetch('https://example.com/api/purchase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items: cart })
            })

            const data = await response.json()
            alert('Compra realizada com sucesso!');
            clearCart(); // Limpar o carrinho após a compra
        } catch (error) {
            console.error('Erro ao realizar a compra:', error);
            alert('Falha ao realizar a compra.');
        }
    }

    return (
        <div>
            <h3>Shopping Cart Storage</h3>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>{item.name} - ${item.price}</li>
                ))}
            </ul>
            <button onClick={handlePurchase}>Complete Purchase</button>
        </div>
    )
}

export default ShoppingCart