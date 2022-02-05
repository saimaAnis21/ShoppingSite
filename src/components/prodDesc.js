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
      cartItem:{}
    }
  }

  getProd = async(id) =>{
    let prodData = await fetchProdDesc(id);
    prodData = await prodData.data.product;
    const bigImgSrc = prodData.gallery[0];
    const { name, brand, prices } = prodData;
    const att = {};
    if( prodData.attributes.length > 0){
      
      prodData.attributes.forEach(element => {
        att[element.name] = element.items[0].value;
      });
      
    }
      
    
   const cartItem ={
     brand,
     name,
     prices,
     att,
   }
   console.log(cartItem);
    this.setState({
      prodData,
      bigImgSrc,   
      cartItem   
    });   
    
} 

  componentDidMount(){
    let { data } = this.props.params;
    this._isMounted = true;
        ( async () => {
            this.getProd(data);
          })(); 
  }

  addAttributes = (e) => {
   let obj={};   
   let att = this.state.cartItem.att; 
   
   obj[e.target.name]= e.target.value;   
   att={
     ...att,
     ...obj,
   };
   
   this.setState({
    cartItem:{      
      ...this.state.cartItem,
        att,           
    }
   })
   console.log(this.state.cartItem);
  }
  
  render() {
    const { prodData, bigImgSrc } = this.state;

    const attStyle ={
      marginRight:'10px',
      textAlign:'center',
      display:'inline-block',
      border:'2px solid black'
    };

    const brandnameStyle={
      fontSize:'30px',
      color:'#1D1F22'
    }
        
    if(this._isMounted){
      
      return(
        <div style={{ border:'5px solid red', marginTop:'100px', display:'flex'}}>

          <div style={{ display:'flex', flexDirection:'column'}}>{ prodData.gallery.map( (pic) => (
           <a onClick={() => this.setState({ bigImgSrc:pic })}><img src={pic} style={{ width:'auto', height:'100px'}}></img></a>
          ))}
          </div>

          <div><img src={bigImgSrc} style={{ width:'auto', height:'600px'}}></img></div>

          <div>
            <div style={ {fontWeight:'600', ...brandnameStyle } }>{prodData.brand}</div>

            <div style={{ fontWeight:'normal', ...brandnameStyle }}>{prodData.name}</div>

            <div>{ prodData.attributes.length > 0 ? prodData.attributes.map((att) => (
              <>
              <p>{att.name}</p>
              <div onChange={(e) => this.addAttributes(e)}>
               { att.name == "Color" ? att.items.map( item => 
                <div style={{ color:`${item.value}`, backgroundColor:`${item.value}`, ...attStyle}}> <input type="radio" checked={this.state.cartItem.att[att.name]=== item.value} value={item.value} name={att.name} />{item.displayValue}</div>) : att.items.map( item => <div style={ attStyle }><input type="radio" checked={this.state.cartItem.att[att.name]=== item.value} value={item.value} name={att.name} />{item.displayValue}</div> ) }
                </div>
              </>)) : <p></p>}              
            </div>

            <div style={{ fontWeight:'bold', fontSize:'18px', color:'#1D1F22', textTransform:'uppercase'}}>price:</div>
            <div>{ `${prodData.prices.find( (x) => x.currency.symbol == this.context.currencyLabel).amount} ${this.context.currencyLabel} `}</div>

            <button onClick={() => this.context.addToCart(this.state.cartItem)} style={{ textTransform:'uppercase', backgroundColor:'#5ECE7B', border:'2px solid #5ECE7B' }}>Add to cart</button>
           
            <div><Markup content={prodData.description} /></div>

          </div>
        </div>
      ); 
    }else{
      return(
        <div></div>
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
