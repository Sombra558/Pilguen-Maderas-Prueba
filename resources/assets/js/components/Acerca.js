import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Acerca from './Pages/AcercaApi'
export default class LaEmpresa extends Component {
    render() {
        return (
                <Acerca/> 
        );
    }
}

if (document.getElementById('acerca')) {
    ReactDOM.render(<LaEmpresa />, document.getElementById('acerca'));
}