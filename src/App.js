import React, { Component } from 'react';
import NavBar from './container/navBar';
import Products from './container/products';
import DataProvider from './DataProvider';

export default class App extends Component {
  
  render() {
    return (
      <DataProvider>
        <div>
          <NavBar />
          <Products />
        </div>
      </DataProvider>
    )
  }
}




