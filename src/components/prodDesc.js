import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import { fetchProdDesc } from '../logic/apiData';
// import { PROD_DESC } from '../queries';

class ProdDesc extends Component {
  constructor(props){
    super(props);
    this.state = {
      prodData:{},
    }
  }

  getProd = async(id) =>{
    const prodData = await fetchProdDesc(id);
    this.setState({
      prodData,
    });   
    
} 

  componentDidMount(){
    let { data } = this.props.params;
    this._isMounted = true;
        ( async () => {
            this.getProd(data);
          })(); 
  }

 
  render() {
    const { prodData } = this.state;
    console.log(prodData);
    return(
      <div style={{ border:'5px solid red'}}>
        hello
      </div>
    ); 
  }
}

export default (props) => (
  <ProdDesc
      {...props}
      params={useParams()}
  />
);
