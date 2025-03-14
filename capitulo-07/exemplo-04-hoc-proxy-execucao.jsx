import React from 'react'

// HOC que verifica a autenticação
const withAuthentication = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = true; // Simulando autenticação (substitua pela lógica real)
    
    if (!isAuthenticated) {
      return <div>Acesso negado. Você precisa estar autenticado para ver isso.</div>
    }
    
    // Se estiver autenticado, renderiza o componente original com as props passadas
    return <WrappedComponent {...props} />
  }
}

// Componente a ser protegido por autenticação
const Dashboard = (props) => {
  return <div>Bem-vindo ao seu painel, {props.username}!</div>
}

// Aplicando o HOC
const ProtectedDashboard = withAuthentication(Dashboard)

const App = () => {
  return <ProtectedDashboard username="João" />
}

export default App