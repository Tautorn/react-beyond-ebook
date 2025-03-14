import React from 'react'
import Form from './Form'

function PersonalData() {
  const onSubmit = (data) => {
    console.log('Form Data:', data)
    // Aqui você pode fazer o tratamento dos dados, como enviar para uma API
  }

  return (
    <div>
      <h1>Personal Data</h1>
      <Form onSubmit={onSubmit} />
    </div>
  )
}

export default PersonalData


import React, { useState } from 'react'

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Form

