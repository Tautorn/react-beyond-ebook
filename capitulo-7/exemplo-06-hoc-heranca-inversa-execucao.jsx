import React, { useState, useEffect } from 'react'

// HOC para adicionar a funcionalidade de trilho de trem
const withTrainTracker = (WrappedComponent, trainCount = 3) => {
  return (props) => {
    const [trains, setTrains] = useState(
      Array(trainCount).fill(0) // Inicializa os trens na posição 0
    )

    useEffect(() => {
      // Função para mover os trens
      const moveTrains = () => {
        setTrains((prev) =>
          prev.map((pos) => (pos + 1) % 100) // Atualiza a posição de cada trem (ciclo de 0 a 100)
        )
      }

      // Atualiza a posição dos trens a cada 1 segundo
      const intervalId = setInterval(moveTrains, 1000)

      // Limpa o intervalo quando o componente desmontar
      return () => clearInterval(intervalId);
    }, [])

    return (
      <div>
        <WrappedComponent {...props} trains={trains} />
        <p>Trem Tracker: {trainCount} trens em movimento no trilho!</p>
      </div>
    )
  }
}

// Componente base que renderiza o trilho e as posições dos trens
const TrainTrack = ({ trains }) => {
  return (
    <div>
      <h2>Trilho de Trem</h2>
      <ul>
        {trains.map((pos, index) => (
          <li key={index}>O trem {index + 1} está na posição: {pos}</li>
        ))}
      </ul>
    </div>
  )
}

// Aplicando o HOC para adicionar o rastreamento de trens ao componente TrainTrack
const TrackedTrainTrack = withTrainTracker(TrainTrack, 5);

const App = () => {
  return (
    <div>
      <TrackedTrainTrack />
    </div>
  )
}

export default App