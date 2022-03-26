import React, { Component } from 'react';
import DataContext from '../DataContext';

export default class CurrencyDisplay extends Component {

    static contextType = DataContext; 

    constructor(props){
       super(props);

    }

  render() {
      const { data } = this.props;
    return (
      <div style={{ margin:'10px 0px'}}>{ `${this.context.currencyLabel}${data.prices.find( (x) => x.currency.symbol == this.context.currencyLabel).amount} `}</div>
    )
  }
}
