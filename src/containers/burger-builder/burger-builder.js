import React, {Component} from "react";
import Aux from '../../hoc/aux/Aux';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/build-controls/build-controls';
import Modal from '../../components/ui/modal/modal';
import OrderSummary from '../../components/burger/order-summary/order-summary';
import axios from '../../axios';
import Spinner from '../../components/ui/spinner/spinner';
import withErrorHandler from '../../hoc/with-error-handler/with-error-handler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.7,
    meat: 1.3
}

class BurguerBuilder extends Component
{
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        orderNowClicked: false,
        loading: false,
        error: false
    };

    updatePurchaseState(ingredients)
    {
        const sum = Object.keys(ingredients)
            .map(igKey =>
            {
                return ingredients[igKey];
            })
            .reduce((sum, el) =>
            {
                return sum + el;
            }, 0);
        
        this.setState({
            purchasable: sum > 0
        });
    }

    addIngredientHandler = (type) =>
    {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = priceAddition + oldPrice;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) =>
    {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0)
        {
            return; 
        }

        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () =>
    {
        this.setState({
            orderNowClicked: true
        });
    }

    purchaseCancelHandler = () =>
    {
        this.setState({
            orderNowClicked: false
        });
    }

    purchaseContinueHandler = () =>
    {
        this.setState({
            loading: true
        });
        // alert('You continue');
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
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
                    loading: false,
                    orderNowClicked: false
                });
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    orderNowClicked: false
                });
            });
    }

    componentDidMount () 
    {
        axios.get('https://burgerstore-8f541-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json')
            .then(response =>
            {
                this.setState({
                    ingredients: response.data
                });
            })
            .catch(error =>
            {
                this.setState({
                    error: true
                })
            });
    }

    render()
    {
        const disableInfo = {
            ...this.state.ingredients
        };

        for (let key in disableInfo)
        {
            disableInfo[key] = disableInfo[key] <= 0;
        };

        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
        let orderSummary = null;

        if (this.state.ingredients)
        {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disableInfo} 
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable} 
                        orderNowClicked={this.purchaseHandler} />
                </Aux>
            );

            orderSummary = <OrderSummary 
                ingredients={this.state.ingredients}
                purchaseCancel={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler} 
                totalPrice={this.state.totalPrice} />;
        }

        if (this.state.loading)
        {
            orderSummary = <Spinner />;
        }

        return (
            <Aux>
                <Modal show={this.state.orderNowClicked} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurguerBuilder, axios);