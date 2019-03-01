import React from 'react'

const TipoForm =(props) => (
    <div className="card">
    <div className="card-header"><h3 className="panel-title">Agregar Tipo</h3></div>   
    <div className="card-body">
    <form  onSubmit={props.onAddTipo}>
        <div className="form-group"><input className="form-control" type="text" name="tipo" placeholder="tipo" required/></div>
        <div className="form-group"><input className="form-control btn btn-primary" type="submit" value="Guardar"/></div>
    </form>
    </div>
    </div>   
)
 
export default TipoForm