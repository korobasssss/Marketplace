import React from "react";
import Products from "./Products";
import {ProductsPropsClass, ProductsState} from "../../interface/productsInterface";

class ProductsClass extends React.Component<ProductsPropsClass, ProductsState> {

    componentDidMount() {
        this.props.setAllProducts()
    }

    render() {
        return <Products products={this.props.products}
                         cartProducts={this.props.cartProducts}/>
    }
}

export default ProductsClass