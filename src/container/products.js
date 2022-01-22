import React, { Component } from 'react';
import { FetchProds } from '../logic/apiData';
import DataContext from '../DataContext';

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
        const data = await FetchProds();
        products = await data.data.category.products;
        this.setState({products, priceLabel});
        
    }

    componentDidMount(){   
        this._isMounted = true;
        ( async () => {
            this.getProd();
          })();            
        
    }
   
    componentDidUpdate(){     
        console.log("updated");
    }
     

    render() {       
        let prod_list = [];
        console.log(this.context.category);
        console.log(this.context.currencyLabel);
        if(this._isMounted){
            if (this.context.category == 'all' || this.context.category == "") {
                prod_list = this.state.products;
            }else{
                prod_list = this.state.products.filter( prod => prod.category == this.context.category);
                }
            return (        
                <div>
                <h1>products</h1>  
                <div style={{ display:'flex', flexWrap:'wrap'}}>
                {prod_list.map((prod) => (                            
                    <div key={prod.id} >
                    <div style={{textAlign:'center'}}><img src={prod.gallery[0]} style={{ width:'auto', height:'100px'}}></img></div>
                    <ul style={{ listStyle:'none'}}>                      
                    <li>{prod.name}</li>
                    <li>{prod.prices.find( (x) => x.currency.label == this.context.currencyLabel).amount}</li>                      
                    </ul>
                    </div>             
                ))}
                </div>
                </div>
            );
        }else{
            return(<div></div>);
          
        }
    }
        
    
}
