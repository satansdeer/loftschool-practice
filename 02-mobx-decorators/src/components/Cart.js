import React from "react";
import { inject, observer } from "mobx-react";
import CartItem from "./CartItem";

@inject('cartStore')
@observer
class Cart extends React.Component {
    
    render() {
        
        const { cartItems } = this.props.cartStore;

        return (
            <React.Fragment>
                <h3 id="heading" className="heading">Cart</h3>
                <div id="shopping-cart">
                    <table id="cart-content" className="u-full-width">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        { cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id} removeItemFromCart={this.removeFromCart} />) }
                        </tbody>
                    </table>
                    
                    <a href="#" id="clear-cart" onClick={(e) => this.removeAllFromCart(e)} className="button u-full-width">Clear Cart</a>
                </div>
            </React.Fragment>
        );
    }

    removeFromCart = (cartItem) => {
        this.props.cartStore.removeFromCart(cartItem);
    }

    removeAllFromCart = (e) => {
        e.preventDefault();
        this.props.cartStore.clearCart();
    }
}

export default Cart;