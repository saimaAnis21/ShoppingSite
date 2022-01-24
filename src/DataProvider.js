import DataContext from "./DataContext";

import React, { Component } from 'react'

export default class DataProvider extends Component {

    state = {
        category:'all',
        currencyLabel: '$',
        
    };

    render() {
        return (
            <DataContext.Provider
                value={{
                    category: this.state.category,
                    currencyLabel: this.state.currencyLabel,
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
                    
                    
                }}
            >
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
