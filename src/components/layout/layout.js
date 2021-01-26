import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './layout.css';
import Toolbar from '../navigation/toolbar/toolbar';


const layout = (props) =>
{
    return (
        <Aux>
            <Toolbar />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;