import React, { Component } from 'react';
import '../styles.css';
import DataContext from '../DataContext';
import { Fragment } from 'react';

export default class CatLinks extends Component {
    render() {
        const btnStyle={
            border:'none', backgroundColor:'white', fontSize:'16px', textTransform:'uppercase'
        };
        
        return (
            <DataContext.Consumer>
                {
                    context => (
                        <Fragment>
                            <div style={{ border:'5px solid orange', display:'flex', alignItems:'flex-start', justifyContent:'space-between', width:'20%'}}>
                            <button style={btnStyle} onClick={() => context.changecategory('all')}>All</button>
                            <button style={btnStyle} onClick={() => context.changecategory('clothes')}>Clothes</button>
                            <button style={btnStyle} onClick={() => context.changecategory('tech')}>Tech</button>
                            </div>
                        </Fragment>
                    )
                }
                
            </DataContext.Consumer>
        )
    }
}
