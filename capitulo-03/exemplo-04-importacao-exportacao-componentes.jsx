// arquivo: Main.jsx
function Main() {
  return (
    <section>
      <h2>Seção Principal</h2>
      <p>Este é o conteúdo principal da sua página.</p>
    </section>
  )
}

export default Main

// arquivo: Footer.jsx
function Footer() {
  return (
    <footer>
      <p>Direitos autorais (c) 2024. Todos os direitos reservados.</p>
    </footer>
  )
}
export default Footer

// arquivo: App.jsx
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <>
      <Main />
      <Footer />
    </>
  )
}

export default App