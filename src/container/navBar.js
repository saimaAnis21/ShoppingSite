import React, { Component } from 'react';
import CatLinks from '../components/catLinks';
import CurrencySelect from '../components/currencySelect';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <CatLinks />
                <CurrencySelect />
            </div>
        )
    }
}
