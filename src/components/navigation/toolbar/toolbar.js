import React from 'react';

import classes from './toolbar.css';
import Logo from '../../logo/logo';
import NavigationItems from '../navigation-items/navigation-items';
import DrawerToggle from '../side-drawer/drawer-toggle/drawer-toggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClick}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;