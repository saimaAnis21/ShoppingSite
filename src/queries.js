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

const PROD_DESC=`{
  product(id: "ps-5") {
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



export { PROD_LIST_QUERY, CURRENCY_LIST, PROD_DESC};