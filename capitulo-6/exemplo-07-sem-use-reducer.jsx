function Wallet() {
  const [balance, setBalance] = useState(0)
  const [limit, setLimit] = useState(100)
  const [bankName, setBankName] = useState("Banco Foo")

  function deposit() {
    setBalance(balance + 10)
    setLimit(limit + 10)
    setBank("Banco XPTO")
  }

  function withdraw() {
    setBalance(balance - 10)
    setLimit(limit - 10)
    setBank("Banco Bar")
  }

  function changeBank() {
    setBank("Banco XPTO")
  }

  return (
    <div>
      <p>Saldo: {balance}</p>
      <button onClick={deposit}>Depositar</button>
      <button onClick={withdraw}>Sacar</button>
      <p>Limite: {limit}</p>
      <p>Banco: {bankName}</p>
      <button onClick={changeBank}>Trocar de banco</button>
    </div>
  )
}