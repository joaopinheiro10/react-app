import React, {Component} from 'react';

import Button from '../../../components/ui/button/button';
import classes from './contact-data.css';
import axios from '../../../axios';
import Spinner from '../../../components/ui/spinner/spinner';

class ContactData extends Component
{
    state ={
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) =>
    {
        event.preventDefault();

        this.setState({
            loading: true
        });
        // alert('You continue');
        const order = {
            ingredients: this.state.ingredients,
            price: this.props.price,
            customer: {
                name: 'Pinhas',
                address: {
                    street :'test street, 1',
                    zipCode: '1234',
                    country: 'Portugal'
                },
                email: 'test@test.com',
            },
            deliveryMethod: 'fastest'
        };

        axios.post('/orders.json', order)
            .then(response =>
            {
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({
                    loading: false
                });
            });
    }

    render() 
    {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                <input className={classes.Input}  type="text" name="email" placeholder="Your email" />
                <input className={classes.Input}  type="text" name="street" placeholder="Street" />
                <input className={classes.Input}  type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success"
                    clicked={this.orderHandler}>Order</Button>
            </form>
        );
        if (this.state.loading)
        {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;