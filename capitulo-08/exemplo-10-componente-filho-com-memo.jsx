import React, { memo } from 'react';

function Child({ name, placeOrder }) {
  console.log("Child render"); // Verifica quando o Child re-renderiza

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={placeOrder}>Finalizar Pedido</button>
    </div>
  );
}

export default memo(Child);