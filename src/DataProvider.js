import DataContext from "./DataContext";

import React, { Component } from 'react'

export default class DataProvider extends Component {

    state = {
        category:'all'
    };

    render() {
        return (
            <DataContext.Provider
                value={{
                    category: this.state.category,
                    changecategory: (cat) => {
                        let category = Object.assign({}, this.state.category);  
                        category = cat                      
                        this.setState({
                            category
                        });
                    }
                    
                }}
            >
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
