import React, { useReducer } from 'react'
import { contactosReducer } from '../reducers/contactosReducer'
import Modal from './Modal/Modal'
import Form from './Form/Form'
import Table from './Table/Table'


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
    },
    {
        id: "lio-987",
        nombre: "Daniel",
        numero: "56234875"
    }
]

const Contactos = () => {
    //state = estado inicial, dispatch = funcion que va a disparar el cambio de estado, como un setState
    const [state, dispatch] = useReducer(contactosReducer, contactos) //Recibe como parametros, funcion reducer (funcion que creamos), el estado inicial (lista de contactos)
    return (
        <>  
            <Modal body={<Form dispatch={dispatch} />} />
            <Table contactos={state} />
        </>
    )
}

export default Contactos
