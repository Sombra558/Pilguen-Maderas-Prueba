import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Contacto from './Pages/Contacto'
export default class Contactos extends Component {
    render() {
        return (
                <Contacto/> 
        );
    }
}

if (document.getElementById('contacto')) {
    ReactDOM.render(<Contactos />, document.getElementById('contacto'));
}