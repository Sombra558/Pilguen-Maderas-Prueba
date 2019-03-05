import React from 'react';
import Madera from './Madera';
const CatalogoList = (props) => (
    <div className="row catalogo" >
    <br/>
            <div className="col-md-12"> 
            <div className="card">
            <div className="card-header"><h4 className="panel-title">Listas de Productos:</h4></div>   
            <div className="card-body">
            <ul className="row" >
                    {   
                        props.productos.map(productos => (
                            <Madera
                            key={productos.id} 
                            id={productos.id}
                            producto={productos.producto} 
                            descripcion={productos.descripcion}
                            categoria={productos.categoria}
                            url={productos.url}
                            />
                        ))
                    }
                </ul>
            </div>
            </div>
    </div>
    </div>                 
)
export default CatalogoList