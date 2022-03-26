import React, { Component } from 'react';
import '../styles.css';
// import DataContext from '../DataContext';
// import { Fragment } from 'react';
import { Link} from 'react-router-dom';

export default class CatLinks extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        // const btnStyle={
        //     border:'none', backgroundColor:'white', fontSize:'16px', textTransform:'uppercase'
        // };
        
        const ALL = "all";
        const CLOTHES = "clothes";
        const TECH = "tech";
        return (
            
            <div style={{ border:'5px solid orange', display:'flex', alignItems:'flex-start', justifyContent:'space-between', width:'20%'}}>
            {/* <button style={btnStyle} onClick={() => context.changecategory('all')}>All</button> */}
            <Link to={`/products/${ALL}`} key={ALL} >ALL</Link>
            <Link to={`/products/${CLOTHES}`} key={CLOTHES} >CLOTHES</Link> 
            <Link to={`/products/${TECH}`} key={TECH} >TECH</Link>
            {/* <button style={btnStyle} onClick={() => context.changecategory('clothes')}>Clothes</button>
            <button style={btnStyle} onClick={() => context.changecategory('tech')}>Tech</button> */}
            </div>
                        
        )
    }
}

