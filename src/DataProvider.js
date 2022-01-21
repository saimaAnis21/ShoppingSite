import DataContext from "./DataContext";

import React, { Component } from 'react'

export default class DataProvider extends Component {

    state = {
        category:'all',
        currencyLabel:'',
        productsList:[]
    };

    render() {
        return (
            <DataContext.Provider
                value={{
                    category: this.state.category,
                    currencyLabel: this.state.currencyLabel,
                    productsList: this.productsList,
                    changecategory: (cat) => {
                        let category = Object.assign({}, this.state.category);  
                        category = cat ;                     
                        this.setState({
                            category
                        });
                    },
                    populateProdList: (list) => {
                        let productsList = Object.assign({}, this.state.productsList);  
                        productsList = list.map( (el) => el );                      
                        this.setState({
                            productsList
                        });
                    }
                    
                }}
            >
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
