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
            <p>Current Price: <strong>{props.price.toFixed(2)}€</strong></p>
            {controls.map(control => (
                <BuildControl 
                    key={control.label} 
                    label={control.label} 
                    added={() => props.ingredientAdded(control.type)}
                    removed={() => props.ingredientRemoved(control.type)}
                    disabled={props.disabled[control.type]} />
            ))}
            <button 
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.orderNowClicked}>
                Order Now
            </button>
        </div>
    );
}

export default buildControls;