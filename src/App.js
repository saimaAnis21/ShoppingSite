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
        <div style={{ padding:'5px', border:'5px solid yellow', position:'absolute', width:'100%', height:'1513 px', left:'0px', top:'0 px', backgroundColor:'#FFFFFF'}}>
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




