import React from 'react';

import classes from './burger.css';
import BurgerIngredient from './burger-ingredient/burger-ingredient';

const burger = (props) =>
{
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;