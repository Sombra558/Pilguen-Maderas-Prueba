import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
	Route,
	BrowserRouter as Router,
	Link,
	Switch
} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import ServicioSecadoApi from './Pages/ServicioSecadoApi';
import ServiciosCepilladoApi from './Pages/ServiciosCepilladoApi';
export default class Publico extends Component {
    render() {
        return (
            <Router>
                <div className="row">
                <div className="col-md-12"><h1 className="text-center">Servicios</h1></div>
                <Link className="col-md-6" to="/Servicios/Secado">
                <ScrollAnimation  animateIn='fadeInLeft'
                      animateOut='fadeOut'>
                   
                    <div className="card">
                    <img height="350px" src="/img/p3.jpg" className="card-img-top" />       
                    </div>
                    </ScrollAnimation>
                </Link>
                <Link className="col-md-6" to="/Servicios/Cepillado">
                <ScrollAnimation  animateIn='fadeInRight'
                      animateOut='fadeOut'>
                     <div className="card">
                    <img height="350px" src="/img/cepillado.jpg" className="card-img-top" />  
                    </div>
                    </ScrollAnimation>
                </Link>
            
            <Switch>
                <Route path='/Servicios/Secado' exact component={ServicioSecadoApi}></Route>
                <Route path='/Servicios/Cepillado' exact component={ServiciosCepilladoApi}></Route>
            </Switch>
                </div> 
                </Router>
        );
    }
}

if (document.getElementById('servicios')) {
    ReactDOM.render(<Publico />, document.getElementById('servicios'));
}