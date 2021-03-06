import React, { Component } from 'react';
import { fetchCurrency } from '../logic/apiData';
import DataContext from '../DataContext';


export default class CurrencySelect extends Component {

  static contextType = DataContext;

    constructor(props){
      super(props);
          this.state={
            currencySymbols : []
          };
    }

    componentDidMount(){    
      ( async () => {
          const x = await fetchCurrency();
          this.setState({
            currencySymbols: x.data.currencies
          });
          this.context.currencyLabel = this.state.currencySymbols[0].symbol;
          
        })();            
      
  }

  changeCurrencyLabel = (symbol) => {
    this.context.changecurrencyLabel(symbol);
    
  }

  render() {
    const selectSymbols = this.state.currencySymbols;
    return <div>
       <select onChange={(e) => this.changeCurrencyLabel(e.target.value)} >
        {selectSymbols.map((opt) => (
          <option
            key={opt.label}
            value={opt.symbol}
          >
            {`${opt.symbol} ${opt.label}`}
          </option>
        ))}
        ;
      </select>
    </div>;
  }
}
