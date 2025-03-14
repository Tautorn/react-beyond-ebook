import React from 'react';
import useShoeStore from './useShoeStore';

const ShoeList = () => {
  const initialRunningShoes = [
    { id: 1, name: 'Running Shoes', price: 50, quantity: 10 },
  ]
  const initialBasketballShoes = [
    { id: 2, name: 'Basketball Shoes', price: 75, quantity: 5 },
  ]
  const initialCasualShoes = [
    { id: 3, name: 'Casual Shoes', price: 40, quantity: 8 },
  ]

  const [runningShoes, setRunningShoes] = useShoeStore(initialRunningShoes);
  const [basketballShoes, setBasketballShoes] = useShoeStore(initialBasketballShoes);
  const [casualShoes, setCasualShoes] = useShoeStore(initialCasualShoes);

  return (
    <div>
      <h2>Shoe List</h2>
      <h3>Running Shoes</h3>
      <ul>
        {runningShoes.map((shoe) => (
          <li key={shoe.id}>
            {shoe.name} - ${shoe.price} (Quantity: {shoe.quantity})
          </li>
        ))}
      </ul>
      <h3>Basketball Shoes</h3>
      <ul>
        {basketballShoes.map((shoe) => (
          <li key={shoe.id}>
            {shoe.name} - ${shoe.price} (Quantity: {shoe.quantity})
          </li>
        ))}
      </ul>
      <h3>Casual Shoes</h3>
      <ul>
        {casualShoes.map((shoe) => (
          <li key={shoe.id}>
            {shoe.name} - ${shoe.price} (Quantity: {shoe.quantity})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoeList;