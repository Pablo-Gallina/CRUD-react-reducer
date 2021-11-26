import React, {useRef, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({dispatch}) => {
    const button = useRef(null);
    const inpNombre = useRef(null);
    const inpNumero = useRef(null);

    const [data, setData] = useState({nombre: "", numero:""});

    //desestructurar data
    const {nombre, numero} = data

    const handleChange = e =>{
        //a la data, pasale todo lo que tiene data, y agregale el e.target.name (el input actual modificado)
        //Esto hara que guarde todo lo de data y si numero o nombre esta modificado, que se agregue y guardamos la data anterior, pero sobrescirbimos la nueva data
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const actionAgregar = {
        type:"agregar",
        payload: {
            id: uuidv4(),
            nombre,
            numero
        }
    }

    const handleAgregar = ()=>{
        if (data.nombre && data.numero) {
            dispatch(actionAgregar);
            button.current.click();
        }
    }

    const handleSubmit = e =>{
        e.preventDefault();
        inpNumero.current.value = "";
        inpNombre.current.value = "";
        data.nombre = "";
        data.numero = "";
    }

    return (
        <div className="container">
            <form className="row g-3" onSubmit={handleSubmit}>

                <div className="modal-body">
                    <div className="col-md-12">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input ref={inpNombre} onChange={handleChange} name="nombre" value={nombre} type="text" className="form-control" id="nombre" required/>
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="numero" className="form-label">Numero</label>
                        <input ref={inpNumero} onChange={handleChange} name="numero" value={numero} type="number" className="form-control" id="numero" required/>
                    </div>        
                </div>

                <div className="modal-footer">
                    <button ref={button} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" className="btn btn-primary" onClick={handleAgregar}>Agregar</button>
                </div>
                
            </form>
        </div>
    )
}

export default Form