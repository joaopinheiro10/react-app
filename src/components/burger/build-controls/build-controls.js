import React from 'react';

import classes from './build-controls.css';
import BuildControl from './build-control/build-control';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Meat', type: 'meat'}
];

const buildControls = (props) =>
{
    return (
        <div className={classes.BuildControls}>
            {controls.map(control => (
                <BuildControl 
                    key={control.label} 
                    label={control.label} 
                    added={() => props.ingredientAdded(control.type)}
                    removed={() => props.ingredientRemoved(control.type)}
                    disabled={props.disabled[control.type]} />
            ))}
        </div>
    );
}

export default buildControls;