import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools.js';
import {getCountries} from './actions/action-countries';

const Root = () => {
    return (
        <div>
            <h1> Aplikacja wyszukiwanie krajów </h1>
            <DevTools />  
        </div>       
   )   
  }

render( 
    <Provider store={store}>       
        <Root />   
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());
