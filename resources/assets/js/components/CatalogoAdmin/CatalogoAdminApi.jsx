import React, { Component } from 'react';
import axios from 'axios';
import { 
	Route,
	BrowserRouter as Router,
	Link,
	Switch
} from 'react-router-dom';
import DetallesCategoria from './Categoria/DetallesCategoria';
import DetallesTipo from './Tipo/DetallesTipo';
export default class GeneralApp extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    productos:[],
    contadorproductos: 0,
    contadorusuarios: 0,      
    contadorcategorias: 0,
    contadortipos: 0,
    }    
}
componentDidMount() {
    axios.get(`/ControlAdmin/ProductosContador`)
      .then(
        res => {
        const contadorproductos = res.data;
        this.setState({ contadorproductos });
        }
      ),
      axios.get(`/ControlAdmin/CategoriasContador`)
      .then(
        res => {
        const contadorcategorias = res.data;
        this.setState({ contadorcategorias });
        }
      ),
      axios.get(`/ControlAdmin/TiposContador`)
      .then(
        res => {
        const contadortipos = res.data;
        this.setState({ contadortipos });
        }
      )
  }       
   
    render() {
        return (
            <Router>
            <div className="row">

                <div className="col-md-6">
                <div className="card">
                <div className="card-header"><h3 className="card-title">Productos</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadorproductos}</h1></div>
                <div className="card-footer"><Link to="/DetallesProducto">Detalles</Link></div>
                </div>
                </div>

                <div className="col-md-6">
                <div className="card">
                <div className="card-header success"><h3 className="card-title">Categorías</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadorcategorias}</h1></div>
                <div className="card-footer"><Link to="/DetallesProducto">Detalles</Link></div>
                </div>
                </div>
                
                <div className="col-md-6">
                <div className="card">
                <div className="card-header"><h3 className="panel-title">Tipos</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadortipos}</h1></div>
                <div className="card-footer"><Link to="/DetallesCategoria">Detalles</Link></div>
                </div>
                </div> 
                
                <div className="col-md-6">
                <div className="card">
                <div className="card-header"><h3 className="panel-title">Tipos</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadorusuarios}</h1></div>
                <div className="card-footer"><Link to="/DetallesCategoria">Detalles</Link></div>
                </div>
                </div> 

            <div className="col-md-12">
            <Switch>
            <Route path='/DetallesCategorias' exact component={DetallesCategoria}/>
            <Route path='/DetallesTipo' exact component={DetallesTipo} />
            </Switch>
            </div>
            </div>
            </Router> 
        );
    }
}