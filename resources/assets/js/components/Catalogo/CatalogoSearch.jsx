import React from 'react'

const CatalogoSearch = props => (
    <div className="col-md-12">
    <div className="busca">
  <form >
    <div className="form-group">
    <input className="form-control" type="search" id="search" name="search" onChange={props.onSearch} placeholder="Producto, Categorías" />
    </div>
  </form>
  </div>
  </div>

)

export default CatalogoSearch