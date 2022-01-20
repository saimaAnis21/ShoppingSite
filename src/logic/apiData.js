// import { useQuery } from "react-query";

const ENDPOINT="http://localhost:4000/";

const FetchProds = async(cat) => { 
  
  const PROD_LIST_QUERY=`
    query qry($cat: String!){
      category(input: {
        title:$cat
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
        
    try{

      const res = await fetch(ENDPOINT, {
            method:"POST",
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify({query: PROD_LIST_QUERY, variables: { cat }  })
        });
        
      const data = await res.json();
    
    return data;

    }catch(err){
      console.error(err);
    }
    
}

const FetchCurrencies = async() => { 

  const CURRENCY_LIST=`{
    currencies{
      symbol
      label
    }
  }`;

  try{

    const res = await fetch(ENDPOINT, {
          method:"POST",
          headers: { "Content-Type":"application/json"},
          body: JSON.stringify({ query: CURRENCY_LIST })
      });
      
    const data = await res.json();
  
  return data;

  }catch(err){
    console.error(err);
  }
}

export  { FetchProds, FetchCurrencies };