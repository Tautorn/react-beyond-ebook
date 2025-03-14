function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>
}

function GameScore() {
  return (
    <div>
      <p>Score: 0</p>
      <Button onClick={() => alert("Gol")}>Gol</Button>
      <Button onClick={() => alert("Falta")}>Falta</Button>
    </div>
  )
}