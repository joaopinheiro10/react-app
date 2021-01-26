import React from 'react';

import Logo from '../../logo/logo';
import NavigationItems from '../navigation-items/navigation-items';
import classes from './side-drawer.css';
import Backdrop from '../../ui/backdrop/backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) =>
{
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open)
    {
        attachedClasses = [classes.SideDrawer, classes.Open];
    };

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;