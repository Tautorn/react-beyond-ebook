import React, { useState } from "react";

function Wallet() {
  const [balance, setBalance] = useState(0)

  return (
    <div>
      <p>Saldo: {balance}</p>
      <button onClick={() => setBalance(balance + 10)}>Depositar</button>
      <button onClick={() => setBalance(balance - 10)}>Sacar</button>
    </div>
  )
}


function reducer(state, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    default:
      throw new Error()
  }
}

function Wallet() {
  const [state, dispatch] = useReducer(reducer, { balance: 0 });

  return (
    <div>
      <p>Saldo: {state.balance}</p>
      <button onClick={() => dispatch({ type: "deposit", payload: 10 })}>
        Depositar
      </button>
      <button onClick={() => dispatch({ type: "withdraw", payload: 10 })}>
        Sacar
      </button>
    </div>
  )
}

