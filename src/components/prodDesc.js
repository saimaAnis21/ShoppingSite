import React, { Component } from 'react';
import { useParams } from "react-router-dom";

class ProdDesc extends Component {
  constructor(props){
    super(props);
   
  }
  componentDidMount(){
    let { data } = this.props.params;
    console.log(data);
  }

  render() {
    
    return(
      <div>
        <p> prod desc pg </p>
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
