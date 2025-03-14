import { useState } from 'react'

const ElementoPai = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <ElementoFilho count={count} setCount={setCount} />
    </div>
  )
}

const ElementoFilho = ({ count, setCount }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Adicionar</button>
    </div>
  )
}

export default ElementoPai