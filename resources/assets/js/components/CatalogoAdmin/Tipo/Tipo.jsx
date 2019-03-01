import React, { Component } from 'react';
export default class Carrito extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    idprueba:this.props.id,
    tipo:this.props.tipo,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(ev){
    ev.preventDefault();
    let uri = `Tipo/${this.state.idprueba}`
    axios.delete(uri).then(
      res => {
        const tipo  = res.data;
        this.setState({ tipo});
        }
    );
  }
render()
{
  if (!this.state.tipo.length){
      return(
        <tr className="odd gradeX">
             <td className="alert-danger">Eliminado</td>
        </tr> 
      )
      
  } else{
      return (
        <tr className="odd gradeX">
        <td>{this.state.tipo}</td>
        <td>
        <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="x" className="btn btn-danger"/>
                    </form>
        </td>
        </tr> 
      );
  }        
}}