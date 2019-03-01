import React, { Component } from 'react';
import axios from 'axios'
import TipoForm from './TipoForm'
export default class CategoriaApp extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    tipos: [],
    }
    this.handleOnAddTipo=this.handleOnAddTipo.bind(this)
    
}  
            handleOnAddTipo(ivn){
                ivn.preventDefault()
                let form = ivn.target,
                 tipo = {
                     tipo: form.tipo.value,
                 }
                 axios.post(`Tipo`, {
                    tipo: tipo.tipo,
                  })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
                 this.setState({
                        tipos: this.state.tipos.concat([tipo])
                    })
                 form.reset()
                }
              
       
    render() {
        return (
            <div>
                 <TipoForm onAddTipo={this.handleOnAddTipo}/>
            </div>  
        );
    }
}