import React, { Component } from 'react';
import FetchData from '../logic/fetchData';
import DataContext from '../DataContext';
import { Fragment } from 'react';
// import ALL_PRODUCTS from '../queries';

export default class Products extends Component {

    constructor(props){
        super(props);
        this.state = {
          products:[],
        };
        const prod = context.category;
    }   

    componentDidMount(){
    let products =[];
        ( async () => {
            const data = await FetchData("tech");
            products = await data.data.category.products;
            this.setState({products});
        })();
            
        
    }

    componentDidUpdate(){
        console.log(this.state.products);
    }
  

    render() {
        const prod_list = this.state.products;
        return (
            <DataContext.Consumer>
                {
                    context => (
                        <Fragment>
                            <div>
                            <h1>products</h1>  
                            <div style={{ display:'flex', flexWrap:'wrap'}}>
                            {prod_list.map((prod) => (
                                <div>
                                    <div>{context.category}</div>
                                    <div><img src={prod.gallery[0]} style={{ width:'auto', height:'300px'}}></img></div>
                                    <ul>                      
                                    <li>id : {prod.id}</li>
                                    <li>Name: {prod.name}</li>
                                    <li>Category: {prod.category}</li>
                                    <li>{ prod.prices.find(element => element.currency.label == "USD" ).amount}
                                    { prod.prices.find(element => element.currency.label == "USD" ).currency.symbol}</li>                      
                                    </ul>
                                </div>                  
                        ))}
                        
                            </div>
                            </div>
                    </Fragment>
                    )
                }
            </DataContext.Consumer>
        )
    }
}
