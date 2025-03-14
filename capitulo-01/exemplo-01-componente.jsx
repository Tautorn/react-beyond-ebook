const Card = () => {
  return (
    <div>
      <h1>Card</h1>
      <p>Conteúdo do card</p>
    </div>
  )
}

const Button = () => {
  return <button>Botão</button>;
}

const App = () => {
  return (
    <div>
      <Card />
      <Button />
    </div>
  )
}