import React, { Component } from 'react';
import Select from 'react-select';

  class SelectTipo extends Component {
    constructor(...props)  {
        super(...props)
    
        this.state = {
          options: this.props.options,
          values:[],
          selectedOption: [],
        }
    
        this.handleChange = this.handleChange.bind(this)
      }
    componentDidMount(){
        axios.get(`Tipo`)
      .then(
        res => {
        const values = res.data;
        this.setState({ values });
        }
      )
    }
      handleChange (selectedOption) {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }
    
      render() {
        const { selectedOption } = this.state;
 
    return (
      <Select
        name="tipo"
        value={selectedOption}
        tipo={this.props.tipo}
        onChange={this.handleChange}
        options={this.state.values.map(values => ({
          label: values.tipo, value: values.tipo 
        }   
        ))}
       
      />
    );
      }
    }
  

  export default SelectTipo