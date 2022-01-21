import React, { Component } from 'react';
import { FetchProds } from '../logic/apiData';
import DataContext from '../DataContext';
// import ProdCurrency from '../components/prodCurrency';

export default class Products extends Component {

    static contextType = DataContext;

    constructor(props){
        super(props);
          
        this.state = {
          products:[], 
                
        };
      
    }   
    getProd = async() =>{
        this._isMount = true;        
        let products =[];
        const data = await FetchProds();
        products = await data.data.category.products;
        this.setState({products});
        
    }

    componentDidMount(){   
        this._isMounted = true;
        ( async () => {
            this.getProd();
          })();            
        
    }
   
    // componentDidUpdate(){     
    //     console.log(this.state.products);
    // }
     

    render() {       
        let prod_list = [];
        let priceLabel = this.context.currencyLabel;
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
                    <div key={prod.id}>
                    <div><img src={prod.gallery[0]} style={{ width:'auto', height:'300px'}}></img></div>
                    <ul>                      
                    <li>id : {prod.id}</li>
                    <li>Name: {prod.name}</li>
                    <li>Category: {prod.category}</li>
                    <li></li>                      
                    </ul>
                    </div>             
                ))}
                </div>
                </div>
            );
        }else{
            return(<div>nothing here</div>);
          
        }
    }
        
    
}
