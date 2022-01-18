// import { useQuery } from "react-query";

const FetchData = async(cat) => { 
  
  const PROD_LIST_QUERY=`
    query qry($x: String!){
      category(input: {
        title:$x
      }){    
        products{
          id
          name
          category
          prices{
            currency{
              label
              symbol
            }
            amount
          }
          attributes{
            name
            type
            items{
              value
              displayValue
            }
          }
          gallery
        }
      }
    }
    
    `;
    const endpoint="http://localhost:4000/";    
    try{

      const res = await fetch(endpoint, {
            method:"POST",
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify({query: PROD_LIST_QUERY, variables: { x:cat }  })
        });
        
      const data = await res.json();
    
    return data;

    }catch(err){
      console.error(err);
    }
    
}

export default FetchData;