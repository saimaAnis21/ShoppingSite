import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './container/navBar';
import Products from './container/products';
import DataProvider from './DataProvider';
import ProdDesc from './components/prodDesc';

export default class App extends Component {

  render() {
    return (
      <DataProvider>
        <div>
          <Routes>
            <Route exact path="/Product" component={ProdDesc}/>
          </Routes>
          <NavBar />
          <Products />
        </div>
      </DataProvider>
    )
  }
}




