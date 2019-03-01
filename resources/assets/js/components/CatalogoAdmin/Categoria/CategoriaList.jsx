import React from 'react';
import Categoria from './Categoria';
const CarritoList = (props) => (
    <div className="row">
    <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>Categoria</th>
                                       	<th>Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  
                                   {
                                   props.categorias.map(categorias => (
                                    <Categoria
                                    key={categorias.id}
                                    id={categorias.id}
                                    categoria={categorias.categoria}
                                    />
                                ))
                                    }
						           
        							
                                </tbody>
    </table>
         
    </div>                 
)
export default CarritoList