import React, { Component } from 'react';
import FetchData from '../logic/fetchData';
import DataContext from '../DataContext';

export default class Products extends Component {

    static contextType = DataContext;

    constructor(props){
        super(props);
        this.state = {
          products:[],
        };
        
    }   

    getProd = async() =>{
        const info = this.context;
        let products =[];
        const data = await FetchData(info.category);
        products = await data.data.category.products;
        this.setState({products});
    }

    componentDidMount(){    
        ( async () => {
            this.getProd();
          })();            
        
    }

    componentDidUpdate(){        
       
        ( async () => {
          this.getProd();
        })();
    }
  

    render() {
        const prod_list = this.state.products;
        return (
            
                            <div>
                            <h1>products</h1>  
                            <div style={{ display:'flex', flexWrap:'wrap'}}>
                            {prod_list.map((prod) => (
                                <div>
                                    <div><img src={prod.gallery[0]} style={{ width:'auto', height:'300px'}}></img></div>
                                    <ul>                      
                                    <li>id : {prod.id}</li>
                                    <li>Name: {prod.name}</li>
                                    <li>Category: {prod.category}</li>
                                    <li>{ prod.prices.find(element => element.currency.label == this.context.symLabel ).amount}
                                    { prod.prices.find(element => element.currency.label == this.context.symLabel ).currency.symbol}</li>                      
                                    </ul>
                                </div>                  
                        ))}
                        
                            </div>
                            </div>
                   
        )
    }
}
