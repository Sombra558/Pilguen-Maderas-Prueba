import React from 'react';

const Producto =(props) => (
    
    <li className="list-group-item col-md-4 links" >
    <a href={'Catalogo/'+props.id}>
    <div className="card hop">
    <img height="150px" src={props.url} className="card-img-top" />
    <div className="card-header"><h5 className="card-title">{props.producto}</h5></div>   
    <div className="card-body">
    {<h5>{props.categoria}</h5>}
    </div>
    </div></a>
    </li>

)
export default Producto