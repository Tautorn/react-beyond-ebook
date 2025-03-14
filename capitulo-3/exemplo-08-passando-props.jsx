function Page() {
  const items = ['Home', 'Services', 'About', 'Contact']
  const title = 'Menu'
  
  return (
    <div>
      <h1>Page</h1>
      <Header items={items} title={title} />
    </div>
  )
}




function Header(props) {
  return (
    <header>
      <h2>{props.title}</h2>
      <nav>
        <ul>
          {props.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

