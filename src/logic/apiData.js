// import { useQuery } from "react-query";

const ENDPOINT="http://localhost:4000/";

const FetchProds = async() => { 
  
  const PROD_LIST_QUERY=`{
    category{
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
  
  }`;    
        
    try{

      const res = await fetch(ENDPOINT, {
            method:"POST",
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify({query: PROD_LIST_QUERY })
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