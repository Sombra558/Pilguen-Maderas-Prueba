import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CatalogoApi from './Catalogo/CatalogoApi';

export default class Catalogo extends Component {
    render() {
        return (
                <CatalogoApi/> 
        );
    }
}

if (document.getElementById('catalogo')) {
    ReactDOM.render(<Catalogo />, document.getElementById('catalogo'));
}
