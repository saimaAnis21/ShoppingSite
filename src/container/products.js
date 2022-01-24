import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../logic/apiData';
import DataContext from '../DataContext';
import { PROD_LIST_QUERY } from '../queries';

export default class Products extends Component {

    static contextType = DataContext;

    constructor(props){
        super(props);
          
        this.state = {
          products:[], 
          priceLabel:"",                
        };
      
    }   
    getProd = async() =>{
        this._isMount = true;        
        let products =[];
        const priceLabel = this.context.currencyLabel;
        const data = await fetchData(PROD_LIST_QUERY);
        products = await data.data.category.products;
        this.setState({products, priceLabel});
        
    }

    componentDidMount(){   
        this._isMounted = true;
        ( async () => {
            this.getProd();
          })();            
        
    }
   

    render() {       
        let prod_list = [];        
        if(this._isMounted){
            if (this.context.category == 'all' || this.context.category == "") {
                prod_list = this.state.products;
            }else{
                prod_list = this.state.products.filter( prod => prod.category == this.context.category);
                }                
            return (        
                <div>
                <h1>{this.context.category}</h1>  
                <div style={{ display:'flex', flexWrap:'wrap'}}>
                {prod_list.map((prod) => (
                        
                    <Link to={`/product/${prod.id}`}>   
                        <div key={Math.random()} >
                            <div style={{textAlign:'center'}}><img src={prod.gallery[0]} style={{ width:'auto', height:'100px'}}></img></div>
                            <ul style={{ listStyle:'none'}}>                      
                            <li>{prod.name}</li>
                            <li>{ `${prod.prices.find( (x) => x.currency.symbol == this.context.currencyLabel).amount} ${this.context.currencyLabel} `}</li>                      
                            </ul>
                        </div>     
                    </Link>         
                ))}
                </div>
                </div>
            );
        }else{
            return(<div></div>);
          
        }
    }
        
    
}
