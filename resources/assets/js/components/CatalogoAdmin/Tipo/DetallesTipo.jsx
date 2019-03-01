import React, { Component } from 'react';
import axios from 'axios';
import TipoList from './TipoList';
export default class DetallesCategoria extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    tipos: [],
    }
}
componentDidMount(){
    axios.get(`Tipo`)
      .then(
        res => {
        const tipos = res.data;
        this.setState({ tipos });
        }
      )
  }
    render() {
        return (
            <div>
                    <TipoList tipos={this.state.tipos} />
            </div>  
        );
    }
}