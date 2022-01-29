import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import { fetchProdDesc } from '../logic/apiData';
import { Markup } from 'interweave';
import DataContext from '../DataContext';

class ProdDesc extends Component {

  static contextType = DataContext;

  constructor(props){
    super(props);
    this.state = {
      prodData:{},
      bigImgSrc:'',
    }
  }

  getProd = async(id) =>{
    let prodData = await fetchProdDesc(id);
    prodData = await prodData.data.product;
    const bigImgSrc = prodData.gallery[0];
    this.setState({
      prodData,
      bigImgSrc
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
    const { prodData, bigImgSrc } = this.state;
    console.log(prodData.attributes);
    if(this._isMounted){
      return(
        <div style={{ border:'5px solid red', marginTop:'100px', display:'flex'}}>
          <div style={{ display:'flex', flexDirection:'column'}}>{ prodData.gallery.map( (pic) => (
           <a onClick={() => this.setState({ bigImgSrc:pic })}><img src={pic} style={{ width:'auto', height:'100px'}}></img></a>
          ))}</div>
          <div><img src={bigImgSrc} style={{ width:'auto', height:'600px'}}></img></div>
          <div>
            <div style={{ fontWeight:'600', fontSize:'30px', color:'#1D1F22'}}>{prodData.brand}</div>
            <div style={{ fontWeight:'normal', fontSize:'30px', color:'#1D1F22'}}>{prodData.name}</div>
            
            <div style={{ fontWeight:'bold', fontSize:'18px', color:'#1D1F22', textTransform:'uppercase'}}>price:</div>
            <div>{ `${prodData.prices.find( (x) => x.currency.symbol == this.context.currencyLabel).amount} ${this.context.currencyLabel} `}</div>
            <div><Markup content={prodData.description} /></div>
          </div>
        </div>
      ); 
    }else{
      return(
        <div>nothing</div>
      );
    }
    
  }
}

export default (props) => (
  <ProdDesc
      {...props}
      params={useParams()}
  />
);
