import React, { Component } from 'react';

import Aux from '../aux/Aux';
import classes from './layout.css';
import Toolbar from '../../components/navigation/toolbar/toolbar';
import SideDrawer from '../../components/navigation/side-drawer/side-drawer';


class Layout extends Component
{
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () =>
    {
        this.setState({
            showSideDrawer: false
        });
    }

    sideDrawerHandler = () =>
    {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render()
    {
        return (
            <Aux>
                <Toolbar drawerToggleClick={this.sideDrawerHandler}/>
                <SideDrawer open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;