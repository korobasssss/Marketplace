import {Component} from "react";
import OneSelectedProduct from "./OneSelectedProduct";
import {OneCartPropsClass, OneCartStateClass} from "../../../interface/oneSelectedProductInterface";

class OneSelectedProductClass extends Component<OneCartPropsClass, OneCartStateClass> {

    deleteOneProductFromCart = () => {
        this.props.deleteOneProductFromCart(this.props.oneProduct.id)
    }
    addOneCountProductToCart = () => {
        if (this.props.oneProduct.count < this.props.oneProduct.stock) {
            this.props.addOneCountProductToCart(this.props.oneProduct.id)
        }
    }
    deleteOneCountProductFromCart = () => {
        if (this.props.oneProduct.count > 1) {
            this.props.deleteOneCountProductFromCart(this.props.oneProduct.id)
        }
    }
    render() {
        return <OneSelectedProduct oneProduct={this.props.oneProduct}
                                   deleteOneProductFromCart={this.deleteOneProductFromCart}
                                   addOneCountProductToCart={this.addOneCountProductToCart}
                                   deleteOneCountProductFromCart={this.deleteOneCountProductFromCart}/>
    }
}

export default OneSelectedProductClass