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

    findIndex = (item) => {
        let cart = this.state.cart; 
        return Object.keys(cart).find( key => JSON.stringify(cart[key].item) == JSON.stringify(item));
    }

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
                        let index = this.findIndex(item);
                        console.log(index); 
                        if(index === undefined){
                            cart[cartItemCtr]={
                                item,   
                                quantity:1                         
                            }
                            cartItemCtr += 1; 
                            
                        }else{
                            cart[index].quantity+=1;
                        }                       
                                         
                        this.setState({
                            cart,
                            cartItemCtr
                        });
                         
                    },

                    incQuantity: (item) => {                        
                        let cart = this.state.cart; 
                        let index = this.findIndex(item);
                        console.log(index);
                        if(index === undefined){
                            console.log("item doesnt exist");
                        }else{
                            cart[index].quantity+=1;
                        }                       
                                         
                        this.setState({
                            cart                            
                        });
                    },

                    decQuantity: (item) => {                        
                        let cart = this.state.cart; 
                        let index = this.findIndex(item);
                        console.log(index);
                        if(index === undefined){
                            console.log("item doesnt exist");     
                            
                        }else{
                            cart[index].quantity == 1 ? delete cart[index] : cart[index].quantity-=1;
                        }                       
                                         
                        this.setState({
                            cart                            
                        });
                    },
                    
                    
                }}
            >
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
