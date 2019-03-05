import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
	Route,
	BrowserRouter as Router,
	Link,
	Switch
} from 'react-router-dom';
import CatalogoApi from './Catalogo/CatalogoApi';
import AstillaApi from './Catalogo/Astillas/AstillaApi';
import PollinesApi from './Catalogo/Pollines/PollinesApi';
import MaderasApi from './Catalogo/Maderas/MaderasApi';
import CortezaApi from './Catalogo/Cortezas/CortezasApi';
export default class Catalogo extends Component {
    render() {
        return (
            <Router>
                <div className="row">
                    <div className="col-md-3">
                            <div className="row text-center border categoria">
                            <h3 className="col-md-12 list-group-item">Categorías</h3>
                            <Link className="col-md-12 list-group-item" to="/Catalogo">Todos Los Productos</Link>
                            <Link className="col-md-12 list-group-item" to="/Astillas">Astilla</Link> 
                            <Link className="col-md-12 list-group-item" to="/Cortezas">Corteza</Link>
                            <Link className="col-md-12 list-group-item" to="/Pollines">Pollines</Link>
                            <Link className="col-md-12 list-group-item" to="/Maderas">Maderas</Link>
                            </div>
                    </div>
                    <div className="col-md-9">
                    <Switch>
                           <Route path='/Catalogo' exact component={CatalogoApi}></Route>
                           <Route path='/Astillas' exact component={AstillaApi}></Route>
                           <Route path='/Cortezas' exact component={CortezaApi}></Route>
                           <Route path='/Pollines' exact component={PollinesApi}></Route>
                           <Route path='/Maderas' exact component={MaderasApi}></Route>
                    </Switch> 
                    </div>      
                 </div>
            </Router>
          
        );
    }
}

if (document.getElementById('catalogo')) {
    ReactDOM.render(<Catalogo />, document.getElementById('catalogo'));
}
