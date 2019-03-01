import React, { Component } from 'react';
import axios from 'axios';
import CategoriaList from './CategoriaList';
export default class DetallesCategoria extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    categorias: [],
    }
}
componentDidMount(){
    axios.get(`Categoria`)
      .then(
        res => {
        const categorias = res.data;
        this.setState({ categorias });
        }
      )
  }
    render() {
        return (
            <div>
                    <CategoriaList categorias={this.state.categorias} />
            </div>  
        );
    }
}