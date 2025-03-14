function reducer(state, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + action.payload }
    case "withdraw":
      return { ...state, balance: state.balance - action.payload }
    case "changeBank":
      return { ...state, bankName: action.payload };
    default:
      throw new Error()
  }
}

function Wallet() {
  const [state, dispatch] = useReducer(reducer, {
    balance: 0,
    limit: 100,
    bankName: "Banco Foo",
  })

  return (
    <div>
      <p>Saldo: {state.balance}</p>
      <button onClick={() => dispatch({ type: "deposit", payload: 10 })}>
        Depositar
      </button>
      <button onClick={() => dispatch({ type: "withdraw", payload: 10 })}>
        Sacar
      </button>
      <p>Limite: {state.limit}</p>
      <p>Banco: {state.bankName}</p>
      <button
        onClick={() => dispatch({ type: "changeBank", payload: "Banco XPTO" })}
      >
        Trocar de banco
      </button>
    </div>
  )
}