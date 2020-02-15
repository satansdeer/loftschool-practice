import React from "react";
import PropTypes from "prop-types";
import { toJS } from "mobx";

class CartItem extends React.Component {
    
    static propTypes = {
        cartItem: PropTypes.object.isRequired,
        removeItemFromCart: PropTypes.func.isRequired
    };

    render() {
        
        const item = this.props.cartItem;

        return (
            <tr>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                    <a href="#" onClick={(e) => this.removeFromCart(e, item)} data-id={item.id} className="remove">X</a>
                </td>
            </tr>
        );
    }

    removeFromCart = (e, cartItem) => {
        e.preventDefault();
        var cartItemObject = toJS(cartItem);
        this.props.removeItemFromCart(cartItemObject);
    };
}

export default CartItem;