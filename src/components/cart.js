import React, { Component } from 'react';
import DataContext from '../DataContext';

export default class Cart extends Component {
    static contextType = DataContext;

    
  render() {     
    const cart = Object.values(this.context.cart);
      
      const brandStyle={
        fontSize:'30px', 
        lineHeight:'27px',
      };

    return ( <div style={{ marginTop:'100px', marginLeft:'100px', marginRight:'100px'}}>
        <h1 style={{textTransform:'uppercase'}}>cart</h1>
        <div style={{ display:'flex', flexDirection:'column'}}>
            {cart.map((element) => (
                  <div style={{ display:'flex', justifyContent:'space-between'}}>
                    <div>
                      <p style={{ ...brandStyle, fontWeight:'600' }}>{element.item.brand}</p>
                      <p style={{ ...brandStyle, fontWeight:'normal' }}>{element.item.name}</p>
                      <p style={{fontWeight:'bold', fontSize:'24px', lineHeight:'18px'}}>{ `${element.item.prices.find( (x) => x.currency.symbol == this.context.currencyLabel).amount} ${this.context.currencyLabel} `}</p>
                      {/* { Object.keys(item.att).length === 0 ? <p>no att</p> : <p>yes att</p>} */}
                      { Object.keys(element.item.att).map((key) => (
                        <div style={{ display:'flex'}}>
                          <div>{key}</div>
                          <div>{ key==="Color" ? <div style={{width:'50px', height:'50px', backgroundColor:`${element.item.att[key]}`}}></div>: <div>{element.item.att[key]}</div>}</div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <img style={{ width:'100px', height:'auto'}} src={element.item.bigImgSrc}></img>
                    </div>
                    <div>{element.quantity}</div>
                  </div>
            ))}
        </div>
    </div>);
  }
}
