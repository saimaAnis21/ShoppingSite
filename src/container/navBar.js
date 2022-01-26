import React, { Component } from 'react';
import CatLinks from '../components/catLinks';
import CurrencySelect from '../components/currencySelect';

export default class NavBar extends Component {
    render() {
        return (
            <div style={{ border:'5px solid green', position:'absolute', left:'0%', right:'0%', top:'0%', bottom:'0%', width:'1440 px', height:'80px', backgroundColor:'#FFFFFF'}}>
                <CatLinks />
                <CurrencySelect />
            </div>
        )
    }
}
