import React from 'react';
// import { Link, useParams } from 'react-router-dom';
// import DataContext from '../DataContext';
// import CurrencyDisplay from '../components/currencyDisplay';
import { useQuery, gql } from '@apollo/client';

const PROD_LIST=gql`
query qry($cat:String!){
  category(input: { title: $cat } ){
  name
  products{
    name
    id
    category
    prices{
      currency{
        label
        symbol
      }
      amount
    }
    gallery
  }
}

}`;

export default function Products() {    
    
    const { loading, error, data } = useQuery(PROD_LIST, {
        variables: { cat:'all' },
      });

      if(loading){
          
        return(
            <div>loading!!!</div>
            );   
    
      }else{
          console.log(data.category.products);
          let prod_list = data.category.products;
          let prodStyle={ fontSize:'18px', lineHeight:'160%', color:'#1D1F22'};
        return(
            <div>{prod_list.map((prod) => (
                        
                      
            <div key={prod.id} style={{ display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between', margin:'20px 20px'}}>
                <div style={{textAlign:'center'}}><img src={prod.gallery[0]} style={{ width:'auto', height:'100px'}}></img></div>
                <div style={{ fontWeight:'300', ...prodStyle}}>{prod.name}</div>               
            </div>     
                            
                ))}
           </div>
            ); 
      }
    
        
  
}

// class Products extends Component {

//     static contextType = DataContext;

//     constructor(props){
//         super(props);
//         const { loading, error, data } = useQuery(PROD_LIST, {
//             variables: { cat:"tech" },
//           });  
//         this.state = {
//           products:[], 
//           priceLabel:"",
//           flag: false,          
//         };
      
//     }  

    // getProd = async(cat) =>{
    //     this._isMount = true;        
    //     let products =[];
    //     const priceLabel = this.context.currencyLabel;
    //     const data = await fetchData(cat);
    //     products = await data.data.category.products;
    //     this.setState({products, priceLabel});
        
    // }

    // componentDidMount(){   
    //     this._isMounted = true;
    //     let { cat } = this.props.params;                                     
    //     if(cat === undefined)  {
    //         cat = "all";
    //     }
    //     // ( async () => {
    //     //     this.getProd(cat);
    //     //   })(); 
    //     console.log(this.data);
                   
    // }

    // componentDidUpdate(prevProps){
    //     if(prevProps.params !== this.props.params){
    //         let { cat } = this.props.params;                                     
    //         if(cat === undefined)  {
    //             cat = "all";
    //         }
    //         ( async () => {
    //             this.getProd(cat);
    //           })(); 
    //         console.log("update");
    //     }
    // }
    

    // componentWillUnmount(){
    //     console.log("umnounted products");
      
    // }

//        render() {       
//         let prod_list = [];
//         let prodStyle={ fontSize:'18px', lineHeight:'160%', color:'#1D1F22'};
        
//         if(this._isMounted){           
            
//                 prod_list = this.state.products;
                           
//             return (        
//                 <div>
//                 <h1>{this.context.category}</h1>  
//                 <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
//                 {prod_list.map((prod) => (
                        
//                     <Link to={`/product/${prod.id}`} key={prod.id}>   
//                         <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between', margin:'20px 20px'}}>
//                             <div style={{textAlign:'center'}}><img src={prod.gallery[0]} style={{ width:'auto', height:'100px'}}></img></div>
//                             <div style={{ fontWeight:'300', ...prodStyle}}>{prod.name}</div>
//                             <div style={{ fontWeight:'500', ...prodStyle}}><CurrencyDisplay data = {prod} /></div>                      
//                         </div>     
//                     </Link>         
//                 ))}
//                 </div>
//                 </div>
//             );
//         }else{
//             return(<div></div>);
          
//         }
//     }
        
    
// }


// export default (props) => (
//     <Products
//         {...props}
//         params={useParams()}
//     />
//   );

