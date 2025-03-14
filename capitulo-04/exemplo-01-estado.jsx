const Elemento = () => {
  const [state, setState] = useState(0)

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState(state + 1)}>Adicionar</button>
    </div>
  )
}