import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

const Table = ({ contactos = [] }) => {
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
                        contactos.map( ( contacto, index ) =><tr key={contacto.id}>
                                            <th scope="row">{index +1}</th>
                                            <td>{ contacto.nombre }</td>
                                            <td>{ contacto.numero }</td>
                                            <td> <Button btnStyle="danger" textButton="Eliminar" /> </td>
                                        </tr>)
                    }
                    
                </tbody>
            </table>
      </div>
    )
}

Table.propTypes = {

}

export default Table
