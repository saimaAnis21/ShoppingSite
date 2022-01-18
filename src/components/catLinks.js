import React, { Component } from 'react';
import '../styles.css';
import DataContext from '../DataContext';
import { Fragment } from 'react';

export default class CatLinks extends Component {
    render() {
        return (
            <DataContext.Consumer>
                {
                    context => (
                        <Fragment>
                            <div style={{display:'flex', justifyContent:'space-around', width:'25%'}}>
                            <p>{context.category}</p>
                            <button>All</button>
                            <button>Clothes</button>
                            <button onClick={() => context.changecategory('tech')}>Tech</button>
                            </div>
                        </Fragment>
                    )
                }
                
            </DataContext.Consumer>
        )
    }
}
