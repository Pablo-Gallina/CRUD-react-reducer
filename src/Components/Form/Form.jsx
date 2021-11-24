import React from 'react'

const Form = () => {
    return (
        <div className="container">
            <form className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" />
                </div>

                <div className="col-md-12 mb-4">
                    <label htmlFor="numero" className="form-label">Numero</label>
                    <input type="number" className="form-control" id="numero" />
                </div>
            </form>
        </div>
    )
}

export default Form