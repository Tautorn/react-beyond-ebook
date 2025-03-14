import React, { useState } from 'react'

// Dumb component
const Brick = ({ width, height, backgroundColor }) => {
  return (
    <div style={{ width, height, backgroundColor }} />
  )
}


// Smart component
const Building = () => {
  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)
  const [backgroundColor, setBackgroundColor] = useState('red')
  const [walls, setWalls] = useState(0)

  return (
    <div>
      <button onClick={() => setWidth(width + 10)}>Aumentar largura</button>
      <button onClick={() => setHeight(height + 10)}>Aumentar altura</button>
      <button onClick={() => setBackgroundColor('blue')}>Mudar cor</button>
      <button onClick={() => setWalls(walls + 1)}>Construir parede</button>

      {walls > 0 && <p>Você construiu {walls} paredes</p>}
      {
        walls > 0 && Array.from({ length: walls }).map((_, index) => (
          <Brick key={index} width={width} height={height} backgroundColor={backgroundColor} />
        ))
      }
    </div>
  )
}

