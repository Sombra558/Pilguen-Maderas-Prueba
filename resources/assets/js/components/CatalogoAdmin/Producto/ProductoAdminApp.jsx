import React, { Component } from 'react';
import axios from 'axios'
import ProductoForm from '../Producto/ProductoForm'
export default class ProductoAdminApp extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    productos: [],
    }
    this.handleOnAddProducto=this.handleOnAddProducto.bind(this)
}

    handleOnAddProducto(on){
        on.preventDefault()
        let form = on.target,
         producto = {
             producto: form.producto.value,
             descripcion: form.descripcion.value,
             categoria: form.categoria.value,
             tipo: form.tipo.value,
             url: form.url.value,
         }
         axios.post(`Producto`, {
            producto: producto.producto,
            descripcion: producto.descripcion,
            categoria: producto.categoria,
            tipo: producto.tipo,
            url: producto.url,
          })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
         this.setState({
            productos: this.state.productos.concat([producto])
            })
         form.reset()
        }
    render() {
        return (
            <div>
                <ProductoForm onAddCourse={this.handleOnAddProducto}/>
            </div>  
        );
    }
}
