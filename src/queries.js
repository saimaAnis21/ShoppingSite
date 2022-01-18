const ALL_PRODUCTS=`{
  category(input: {
    title:"all"
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
  }`;

    export default ALL_PRODUCTS;