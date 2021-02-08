import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/layout/layout';
import BurguerBuilder from './containers/burger-builder/burger-builder';
import Checkout from './containers/checkout/checkout';

class App extends Component 
{
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/" exact component={BurguerBuilder}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
