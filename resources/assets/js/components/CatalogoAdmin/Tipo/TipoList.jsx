import React from 'react';
import Tipo from './Tipo';
const CarritoList = (props) => (
    <div className="row">
    <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>Tipo</th>
                                       	<th>Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  
                                   {
                                   props.tipos.map(tipos => (
                                    <Tipo
                                    key={tipos.id}
                                    id={tipos.id}
                                    tipo={tipos.tipo}
                                    />
                                ))
                                    }
						           
        							
                                </tbody>
    </table>
         
    </div>                 
)
export default CarritoList