// import { useQuery } from "react-query";

const ENDPOINT="http://localhost:4000/";

const fetchData = async (qry) => {
  try{

    const res = await fetch(ENDPOINT, {
          method:"POST",
          headers: { "Content-Type":"application/json"},
          body: JSON.stringify({query: qry })
      });
      
    const data = await res.json();
  
  return data;

  }catch(err){
    console.error(err);
  }
}

const fetchProdDesc = async (id) => {
  console.log(id)
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


export  {fetchProdDesc, fetchData} ;