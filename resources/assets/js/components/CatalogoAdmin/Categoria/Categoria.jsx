import React, { Component } from 'react';
export default class Carrito extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    idprueba:this.props.id,
    categoria:this.props.categoria,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(ev){
    ev.preventDefault();
    let uri = `Categoria/${this.state.idprueba}`
    axios.delete(uri).then(
      res => {
        const categoria  = res.data;
        this.setState({ categoria});
        }
    );
  }
render()
{
  if (!this.state.categoria.length){
      return(
        <tr className="odd gradeX">
             <h5 className="alert-danger">Eliminado</h5>
        </tr> 
      )
      
  } else{
      return (
        <tr className="odd gradeX">
        <td>{this.state.categoria}</td>
        <td>
        <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="x" className="btn btn-danger"/>
                    </form>
        </td>
        </tr> 
      );
  }        
}}