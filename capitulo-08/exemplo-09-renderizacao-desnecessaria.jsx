import React, { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [orderCount, setOrderCount] = useState(0);

  const handleOrder = () => {
    setOrderCount(orderCount + 1); // Incrementa o número de pedidos
  };

  const placeOrder = () => {
    console.log("Order placed!");  // Função passada como prop
  };

  console.log("Parent render"); // Verifica quando o Parent re-renderiza

  return (
    <div className="App">
      <h1>Cafeteria</h1>
      <button onClick={handleOrder}>Adicionar Pedido</button>
      <h2>Pedidos: {orderCount}</h2>
      <Child name={"Café Especial"} placeOrder={placeOrder} />
    </div>
  );
}