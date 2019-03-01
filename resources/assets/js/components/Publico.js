import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Inicio from './Pages/InicioApi'
export default class Publico extends Component {
    render() {
        return (
                <Inicio/> 
        );
    }
}

if (document.getElementById('publico')) {
    ReactDOM.render(<Publico />, document.getElementById('publico'));
}