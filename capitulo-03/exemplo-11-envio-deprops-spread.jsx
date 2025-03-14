function App() {
  const userDetails = {
    name: 'João',
    email: 'joao@example.com',
  }

  return <UserDetails {...userDetails} />;
}