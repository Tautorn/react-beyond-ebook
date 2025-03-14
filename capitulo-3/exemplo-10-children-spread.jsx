function Box({ children }) {
  return <div style={{ padding: '20px', border: '1px solid black' }}>{children}</div>
}

function App() {
  return (
    <Box>
      <h1>Título dentro de uma Box</h1>
      <p>Este parágrafo também está dentro da Box.</p>
    </Box>
  )
}