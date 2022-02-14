import DataContext from "./DataContext";
import React, { Component } from 'react';
import { isEqual } from "lodash";

export default class DataProvider extends Component {

    state = {
        category:'all',
        currencyLabel: '$',
        cart: {},
        cartItemCtr:0,
    };

    render() {
        return (
            <DataContext.Provider
                value={{
                    category: this.state.category,
                    currencyLabel: this.state.currencyLabel,
                    cart: this.state.cart,
                    cartItemCtr: this.state.cartItemCtr,
                    changecategory: (cat) => {
                        let category = Object.assign({}, this.state.category); 
                        category = cat ;                     
                        this.setState({
                            category,   
                                                  
                        });
                    },
                    changecurrencyLabel: (symbol) => {
                        let currencyLabel = Object.assign({}, this.state.currencyLabel); 
                        currencyLabel = symbol;                     
                        this.setState({
                            currencyLabel,
                        });
                    },
                    addToCart: (item) => {                        
                        let cart = this.state.cart; 
                        let cartItemCtr = this.state.cartItemCtr;
                        let index = Object.values(cart).map((x) => x.item).findIndex((x) => JSON.stringify(x) === JSON.stringify(item));
                        console.log(index);
                        console.log(cart);
                        if(index > -1){
                            let qty = cart[index].quantity;
                            let item = cart[index].item;
                            cart[index].quantity+=1;
                        }else{
                            cart[cartItemCtr]={
                                item,   
                                quantity:1                         
                            }
                            cartItemCtr += 1; 
                        }                       
                                         
                        this.setState({
                            cart,
                            cartItemCtr
                        });
                    },
                    
                    
                }}
            >
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
