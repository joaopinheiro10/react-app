import React, { Component } from 'react';

import Layout from './hoc/layout/layout';
import BurguerBuilder from './containers/burger-builder/burger-builder';

class App extends Component 
{
    render() {
        return (
            <div>
                <Layout>
                    <BurguerBuilder />
                </Layout>
            </div>
        );
    }
}

export default App;
