import React, { createContext, useState } from 'react'
import UserProfile from './UserProfile' 

// Utilização da api createContext para criar o contexto
export const UserCompanyContext = createContext()

// Componente Provider que encapsula os dados e fornece para os descendentes
export function UserCompanyProvider({ children }) {
  const user = { name: "João", id: 1 }
  const company = { name: "Tech Corp", id: 101 }

  return (
    <UserCompanyContext.Provider value={{ user, company }}>
      <UserProfile />
    </UserCompanyContext.Provider>
  )
}
