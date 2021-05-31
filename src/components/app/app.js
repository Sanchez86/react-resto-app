import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Background from './food-bg.jpg';

const App = ({RestoService}) => {

    RestoService.getMenuItems().then(res => {return console.log('res', res)});

    return (
        <Router>
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                <AppHeader total={50}/>
                <Route path='/' exact component={MainPage}/>
                <Route path='/main' exact component={MainPage}/>
                <Route path='/cart' component={CartPage}/>
            </div>
        </Router>
    )
};

export default WithRestoService()(App);