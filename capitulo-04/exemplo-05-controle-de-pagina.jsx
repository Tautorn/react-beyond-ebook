function GameScore() {
  const [score, setScore] = useState(0);
  const [foul, setFoul] = useState(0);

  return (
    <div>
    <p>Score: {score}</p>
      <p>Score: {score}</p>
      <Button onClick={() => setScore(score + 1)}>Gol</Button>
      <Button onClick={() => setFoul(foul + 1)}>Falta</Button>
    </div>
  )
}