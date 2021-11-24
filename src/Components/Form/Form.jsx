import React from 'react'

const Form = ({dispatch}) => {
    const actionAgregar = {
        type:"agregar",
        payload: {
            id:"pokjh-8",
            nombre: "Yostin",
            numero: "78965214"
        }
    }


    const handleAgregar = ()=>{
        dispatch(actionAgregar)
    }
    
    return (
        <div className="container">
            <form className="row g-3">

                <div className="modal-body">
                    <div className="col-md-12">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="numero" className="form-label">Numero</label>
                        <input type="number" className="form-control" id="numero" />
                    </div>        
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-primary" onClick={handleAgregar}>Agregar</button>
                </div>
                
            </form>
        </div>
    )
}

export default Form