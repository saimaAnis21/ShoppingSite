import DataContext from "./DataContext";
import React, { Component } from 'react';
import { isEqual } from "lodash";

export default class DataProvider extends Component {

    state = {
        category:'all',
        currencyLabel: '$',
        cart: [],
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
                        // let index = cart.findIndex((x) => JSON.stringify(x) === JSON.stringify(item));
                        cart.push(item);  
                        console.log(cart);
                        cartItemCtr += 1;                  
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
