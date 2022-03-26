import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchData } from '../logic/apiData';
import DataContext from '../DataContext';



class Products extends Component {

    static contextType = DataContext;

    constructor(props){
        super(props);
          
        this.state = {
          products:[], 
          priceLabel:"",
          flag: false,          
        };
      
    }   
    getProd = async(cat) =>{
        this._isMount = true;        
        let products =[];
        const priceLabel = this.context.currencyLabel;
        const data = await fetchData(cat);
        products = await data.data.category.products;
        this.setState({products, priceLabel});
        
    }

    componentDidMount(){   
        this._isMounted = true;
        let { cat } = this.props.params;                                     
        if(cat === undefined)  {
            cat = "all";
        }
        ( async () => {
            this.getProd(cat);
          })(); 
        console.log("mounted products");
                   
    }

    componentDidUpdate(prevProps){
        if(prevProps.params !== this.props.params){
            let { cat } = this.props.params;                                     
            if(cat === undefined)  {
                cat = "all";
            }
            ( async () => {
                this.getProd(cat);
              })(); 
            console.log("update");
        }
    }
    

    componentWillUnmount(){
        console.log("umnounted products");
      
    }

       render() {       
        let prod_list = [];
        let prodStyle={ fontSize:'18px', lineHeight:'160%', color:'#1D1F22'};
        
        if(this._isMounted){           
            
                prod_list = this.state.products;
                           
            return (        
                <div>
                <h1>{this.context.category}</h1>  
                <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
                {prod_list.map((prod) => (
                        
                    <Link to={`/product/${prod.id}`} key={prod.id}>   
                        <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between', margin:'20px 20px'}}>
                            <div style={{textAlign:'center'}}><img src={prod.gallery[0]} style={{ width:'auto', height:'100px'}}></img></div>
                            <div style={{ fontWeight:'300', ...prodStyle}}>{prod.name}</div>
                            <div style={{ fontWeight:'500', ...prodStyle}}>{ `${prod.prices.find( (x) => x.currency.symbol == this.context.currencyLabel).amount} ${this.context.currencyLabel} `}</div>                      
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


export default (props) => (
    <Products
        {...props}
        params={useParams()}
    />
  );
