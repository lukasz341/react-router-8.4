import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools.js';
import {getCountries} from './actions/action-countries';
import routes from './routes';
import { Router, Route, hashHistory } from 'react-router';
import Navigation from './presentational/navigation.component';
import styles from './country.css';

const Root = () => {
    return (
        <div>
            <DevTools /> 
            <Router history={hashHistory} routes={routes}/>
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
