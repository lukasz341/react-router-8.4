import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools.js';
import {getCountries} from './actions/action-countries';


render( 
    <Provider store={store}>       
        <DevTools />   
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());
