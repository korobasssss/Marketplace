import {Component} from "react";
import {OneProductPropsClass, OneProductStateClass} from "../../interface/oneProductInterface";
import OneProduct from "./OneProduct";

class OneProductClass extends Component<OneProductPropsClass, OneProductStateClass> {

    addOneProductToCart = () => {
        this.props.addOneProductToCart(this.props.product)
    }
    deleteOneProductFromCart = () => {
        this.props.deleteOneProductFromCart(this.props.product.id)
    }

    render() {
        return <OneProduct product={this.props.product}
                           addOneProductToCart={this.addOneProductToCart}
                           deleteOneProductFromCart={this.deleteOneProductFromCart}
                           isInCartProducts={this.props.isInCartProducts}/>;
    }
}

export default OneProductClass