import { useCallback } from 'react';

export default function PetShop({ foodId, userId }) {
  // Função para enviar a compra
  const handleBuy = useCallback((purchaseDetails) => {
    fetch(`/buy/${foodId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        purchaseDetails,
      }),
    })
    // ... then/catch
  }, [foodId, userId]);

  // Simula o envio de detalhes da compra ao clicar
  const onBuyClick = () => {
    const purchaseDetails = { quantity: 2, price: 50 };
    handleBuy(purchaseDetails);
  };

  return (
    <div>
      <h1>Pet Shop</h1>
      <button onClick={onBuyClick}>Comprar Ração</button>
    </div>
  );
}