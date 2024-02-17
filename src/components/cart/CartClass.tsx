import {Component} from "react";
import {CartPropsClass, CartStateClass} from "../../interface/cartInterface";
import Cart from "./Cart";

class CartClass extends Component<CartPropsClass, CartStateClass> {

    componentDidMount() {
        this.props.setAllProductsInCart()
    }

    render() {
        return <Cart cartProducts={this.props.cartProducts}
                     count={this.props.count}
                     price={this.props.price}
                     isCartButtonPressed={this.props.isCartButtonPressed}
                     setCartButtonPressed={this.props.setCartButtonPressed}
                     deleteOneProductFromCart={this.props.deleteOneProductFromCart}
                     addOneCountProductToCart={this.props.addOneCountProductToCart}
                     deleteOneCountProductFromCart={this.props.deleteOneCountProductFromCart}/>;
    }
}

export default CartClass
