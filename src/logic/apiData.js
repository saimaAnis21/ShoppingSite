
const ENDPOINT="http://localhost:4000/";
const PROD_LIST_QUERY=`
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

const CURRENCY_LIST=`{
  currencies{
    symbol
    label
  }
}`;


const fetchData = async (cat) => {
  try{

    const res = await fetch(ENDPOINT, {
          method:"POST",
          headers: { "Content-Type":"application/json"},
          body: JSON.stringify({query: PROD_LIST_QUERY, variables:{ cat } })
          
      });
      
    const data = await res.json();
  
  return data;

  }catch(err){
    console.error(err);
  }
}

const fetchCurrency = async () => {
  try{

    const res = await fetch(ENDPOINT, {
          method:"POST",
          headers: { "Content-Type":"application/json"},
          body: JSON.stringify({query: CURRENCY_LIST })
      });
      
    const data = await res.json();
  
  return data;

  }catch(err){
    console.error(err);
  }
}

const fetchProdDesc = async (id) => {
  
  const PROD_DESC=`
  query qry($prodID:String!){
    product(id: $prodID) {
     name
      brand
      id
      description
      prices{
        currency{
          label
          symbol
        }
        amount
      }
      attributes{
        id
        name
        items{
          id
          value
          displayValue
        }
      }
      gallery
    }
  }`;
  try{

    const res = await fetch(ENDPOINT, {
          method:"POST",
          headers: { "Content-Type":"application/json"},
          body: JSON.stringify({query: PROD_DESC, variables:{ prodID:id } })
      });
      
    const data = await res.json();
  
  return data;

  }catch(err){
    console.error(err);
  }
}


export  {fetchProdDesc, fetchData, fetchCurrency} ;