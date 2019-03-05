import React from 'react'

const CatalogoSearch = props => (
    <div className="col-md-12 ">
  <br/>
  <form className="form-control">
    <div className="form-group">
    <div className="col-auto">
     
        <input className="form-control text-center" id="inlineFormInputGroup" type="search"  name="search" onChange={props.onSearch} placeholder="Busqueda De Producto" />
     
      </div>
  
    
        
    </div>
  </form>
  <br/>
  </div>
 

)

export default CatalogoSearch