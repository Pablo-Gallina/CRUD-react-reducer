import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

const Table = ({ contactos = [], dispatch }) => {

    const handleEliminar = (id)=>{
        const eliminarAction = {
            type: "eliminar",
            payload: id
        }

        dispatch(eliminarAction);
    }

    return (
        <div className="container">
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Numero</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contactos.length <= 0 ? <tr>
                                                    <td className="text-center" colSpan="4">No hay datos</td>
                                                </tr> 
                                        : contactos.map( ( contacto, index ) =><tr key={contacto.id}>
                                            <th scope="row">{index +1}</th>
                                            <td>{ contacto.nombre }</td>
                                            <td>{ contacto.numero }</td>
                                            <td> <Button btnStyle="danger" textButton="Eliminar" _funcion={()=>handleEliminar(contacto.id)}/> </td>
                                        </tr>) 
                        
                    }
                    
                </tbody>
            </table>
      </div>
    )
}

Table.propTypes = {
    contactos: PropTypes.array
}

export default Table
