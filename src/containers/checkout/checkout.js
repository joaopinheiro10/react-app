import React, { Component } from 'react';
import CheckoutSummary from '../../components/order/checkout/checkout-summary';
import {Route} from 'react-router-dom';
import ContactData from './contact-data/contact-data';

class Checkout extends Component
{
    state =
    {
        ingredients: null,
        price: 0
    }

    componentWillMount()
    {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries())
        {
            if (param[0] === 'price')
            {
                price = param[1];
            }
            else
            {
                ingredients[param[0]] = +param[1];
            }
        }

        this.setState({
            ingredients: ingredients,
            price: price
        })
    }

    checkoutCancelledHandler = () =>
    {
        this.props.history.goBack();
    }

    checkoutContinuedHanlder = () =>
    {
        this.props.history.replace('/checkout/contact-data');
    }

    render()
    {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHanlder}/>
                <Route path={this.props.match.path + '/contact-data'} 
                    render={(props) => (<ContactData ingredients={this.state.ingredients}
                        price={this.state.price}
                        props={props}/>)}/>
            </div>
        )
    }
}

export default Checkout;