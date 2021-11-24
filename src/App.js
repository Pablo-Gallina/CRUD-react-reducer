import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Table from './Components/Table/Table'

const App = () => {
  const contactos = [
    {
      id: "asdfasdf",
      nombre: "Raul",
      numero: "54789632"
    },
    {
      id: "Aoiu5",
      nombre: "Pablo",
      numero: "36987541"
    }
  ]
  return (
    <>
      <Navbar />
      <Table contactos={contactos} />
    </>
  )
}

export default App
