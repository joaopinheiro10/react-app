import React, {Component} from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/burger/burger';

class BurguerBuilder extends Component
{
    render()
    {
        return (
            <Aux>
                <Burger />
                <div>Build Contrls</div>
            </Aux>
        );
    }
}

export default BurguerBuilder;