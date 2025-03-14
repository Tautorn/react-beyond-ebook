import React from "react"

const MyComponent = () => {
  console.log("Renderizando MyComponent")
  return <div>Componente renderizado</div>
}

export default React.memo(MyComponent)