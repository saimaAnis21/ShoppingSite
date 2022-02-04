import React, { Component } from 'react';
import DataContext from '../DataContext';

export default class Cart extends Component {
    static contextType = DataContext;
  render() { 
      const cart = this.context.cart;
      console.log(cart);
    return ( <div style={{ marginTop:'100px', marginLeft:'100px'}}>
        <h1 style={{textTransform:'uppercase'}}>cart</h1>
        <div style={{ display:'flex', flexDirection:'column'}}>
            
        </div>
    </div>);
  }
}
