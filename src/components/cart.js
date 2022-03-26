import React, { Component } from 'react';
import DataContext from '../DataContext';
import { FaMinus, FaPlus } from "react-icons/fa";

export default class Cart extends Component {
    static contextType = DataContext;
  constructor(props){
    super(props);
  }
    
  render() {     
    const cart = Object.values(this.context.cart);
    
      let modalHeader, brandFontWeight, brandStyle, itemStyle ='';

      if(this.props.modal===true){
        modalHeader={fontSize:'15px',};
        brandFontWeight={ fontWeight:'200' };
        brandStyle={fontSize:'15px',lineHeight:'27px',};
        itemStyle ={fontWeight:'bold', fontSize:'15px', lineHeight:'18px'};
      }else{
        modalHeader={fontSize:'30px',};
        brandFontWeight={ fontWeight:'600' };
        brandStyle={fontSize:'30px', lineHeight:'27px',};
        itemStyle ={fontWeight:'bold', fontSize:'24px', lineHeight:'18px'};
      }
   

    return ( <div style={{ marginTop:'100px', marginLeft:'100px', marginRight:'100px'}}>
        <h1 style={{textTransform:'uppercase', ...modalHeader}}>cart</h1>
        <div style={{ display:'flex', flexDirection:'column'}}>
            {cart.map((element) => (
                  <div key={Math.random()} style={{ display:'flex', justifyContent:'space-between'}}>
                    <div>
                      <p style={{ ...brandStyle, ...brandFontWeight }}>{element.item.brand}</p>
                      <p style={{ ...brandStyle, fontWeight:'normal' }}>{element.item.name}</p>
                      <p style={itemStyle}>{ `${element.item.prices.find( (x) => x.currency.symbol == this.context.currencyLabel).amount} ${this.context.currencyLabel} `}</p>
                      {/* { Object.keys(item.att).length === 0 ? <p>no att</p> : <p>yes att</p>} */}
                      { Object.keys(element.item.att).map((key) => (
                        <div key={Math.random()} style={{ display:'flex'}}>
                          <div>{key}</div>
                          <div>{ key==="Color" ? <div style={{width:'50px', height:'50px', backgroundColor:`${element.item.att[key]}`}}></div>: <div>{element.item.att[key]}</div>}</div>
                        </div>
                      ))}
                    </div>
                                       
                    <div style={{ display:'flex', alignItems:'center'}}>
                      <div style={{ display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                        <FaPlus onClick={() => this.context.incQuantity(element.item)} />
                        <div style={{ marginTop:'15px', marginBottom:'15px'}}>{element.quantity}</div>
                        <FaMinus onClick={() => this.context.decQuantity(element.item)} />
                      </div>
                      <div><img style={{ width:'100px', height:'auto'}} src={element.item.bigImgSrc}></img></div>
                    </div>                    
                  </div>
            ))}
        </div>
    </div>);
  }
}


Cart.defaultProps = {
  modal:false
};