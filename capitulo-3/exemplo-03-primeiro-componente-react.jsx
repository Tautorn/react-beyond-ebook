import React from "react"

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <MainSection />
      <Aside />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header>
      <h1>Cabeçalho da Página</h1>
    </header>
  )
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Serviços</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </nav>
  )
}


function MainSection() {
  return (
    <section>
      <h2>Seção Principal</h2>
      <p>Este é o conteúdo principal da sua página.</p>
    </section>
  )
}

function Aside() {
  return (
    <aside>
      <h3>Barra Lateral</h3>
      <p>Conteúdo adicional, como links ou anúncios, pode ir aqui.</p>
    </aside>
  )
}

function Footer() {
  return (
    <footer>
      <p>Direitos autorais (c) 2024. Todos os direitos reservados.</p>
    </footer>
  )
}

export default App