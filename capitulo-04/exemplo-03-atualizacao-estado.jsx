function WhiteBoard({ elements }) {
  const [text, setText] = useState('') // trigger

  const handleChange = (event) => setText(event.target.value) // novo valor
  
  const renderElement = (element, index) => <div key={`element-${index}`}>{element}</div>

  return (
    <div>
      <h1>Quadro Branco</h1>

      <Sidebar /> // sem alteração

      {elements.map(renderElement)}
       
      <input type="text" value={text} onChange={handleChange} /> {/* re-render */}

      <Secreen text={text}>  {/* re-render */}
      
    </div>
  )
}