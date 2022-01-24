import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './container/navBar';
import Products from './container/products';
import DataProvider from './DataProvider';
import ProdDesc from './components/prodDesc';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <DataProvider>
        <div>
        <NavBar />  
            <Routes>
              <Route exact path="/" element={<Products />} />
              <Route exact path="/product/:data" element={<ProdDesc/>} />            
            </Routes>                  
        </div>
      </DataProvider>
      </BrowserRouter>      
    )
  }
}




