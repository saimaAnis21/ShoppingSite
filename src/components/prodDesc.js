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
     bigImgSrc,
     att,
   }
   
    this.setState({
      prodData,
      bigImgSrc,   
      cartItem   
    });   
    
} 

  componentDidMount(){
    let { id } = this.props.params;
    this._isMounted = true;
        ( async () => {
            this.getProd(id);
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
   
  }
  
  render() {
    const { prodData, bigImgSrc } = this.state;

    const attStyle ={
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
        <div style={{ border:'5px solid red', marginTop:'100px', display:'flex', justifyContent:'space-around'}}>

          <div style={{ display:'flex', flexDirection:'column', flexWrap:'wrap', height:'600px'}}>{ prodData.gallery.map( (pic) => (
           <a  style={{margin:'20px 20px'}} key={Math.random()} onClick={() => this.setState({ bigImgSrc:pic })}><img src={pic} style={{ width:'auto', height:'100px'}}></img></a>
          ))}
          </div>

          <div><img src={bigImgSrc} style={{ width:'auto', height:'600px', maxWidth:'400px'}}></img></div>

          <div style={{ display:'flex', flexDirection:'column', justifyContent:'space-around' }}>
            <div style={ {fontWeight:'600', ...brandnameStyle } }>{prodData.brand}</div>

            <div style={{ fontWeight:'normal', ...brandnameStyle }}>{prodData.name}</div>

            <div>{ prodData.attributes.length > 0 ? prodData.attributes.map((att) => (
              <>
              <div key={Math.random()}>{att.name}</div>
              <div key={att.id} style={{display:'flex', justifyContent:'space-evenly'}}>
               { att.name == "Color" ? att.items.map( item => 
                <div key={Math.random()} style={{ color:`${item.value}`, backgroundColor:`${item.value}`, ...attStyle}}> <input key={Math.random()} type="radio" onChange={(e) => this.addAttributes(e)} checked={this.state.cartItem.att[att.name]=== item.value} value={item.value} name={att.name} />{item.displayValue}</div>) : att.items.map( item => <div key={Math.random()} style={ attStyle }><input key={Math.random()} type="radio" onChange={(e) => this.addAttributes(e)} checked={this.state.cartItem.att[att.name]=== item.value} value={item.value} name={att.name} />{item.displayValue}</div> ) }
                </div>
              </>)) : <p key={Math.random()} ></p>}              
            </div>

            <div style={{ fontWeight:'bold', fontSize:'18px', color:'#1D1F22', textTransform:'uppercase'}}>price:
            <div style={{ margin:'10px 0px'}}>{ `${this.context.currencyLabel}${prodData.prices.find( (x) => x.currency.symbol == this.context.currencyLabel).amount} `}</div>
            </div>
            

            <button onClick={() => this.context.addToCart(this.state.cartItem)} style={{ cursor:'pointer', textTransform:'uppercase', backgroundColor:'#5ECE7B', border:'2px solid #5ECE7B' }}>Add to cart</button>
           
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
