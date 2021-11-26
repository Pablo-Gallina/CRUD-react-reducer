import React, { useEffect, useReducer } from 'react'
import { contactosReducer } from '../reducers/contactosReducer'
import Modal from './Modal/Modal'
import Form from './Form/Form'
import Table from './Table/Table'

const init = ()=>{
    const contactos = localStorage.getItem("contactos");
    return contactos ? JSON.parse(contactos) : []
}

const Contactos = () => {
    //state = estado inicial, dispatch = funcion que va a disparar el cambio de estado, como un setState
    const [state, dispatch] = useReducer(contactosReducer, [], init) //Recibe como parametros, funcion reducer (funcion que creamos), el estado inicial (lista de contactos)

    useEffect(() => {
        localStorage.setItem("contactos", JSON.stringify(state))
    }, [state])
    
    return (
        <>  
            <Modal body={<Form dispatch={dispatch} />} />
            <Table contactos={state} dispatch={dispatch} />
        </>
    )
}

export default Contactos
