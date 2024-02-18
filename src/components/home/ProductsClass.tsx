import React from "react";
import Products from "./Products";
import {ProductsPropsClass, ProductsState} from "../../interface/productsInterface";

class ProductsClass extends React.Component<ProductsPropsClass, ProductsState> {

    componentDidMount() {
        this.props.setAllProducts()
    }

    addBatchOfProducts = (skip: number) => {
        this.props.addBatchOfProducts(this.props.activeCategory, skip)
    }

    render() {
        return <Products products={this.props.products}
                         cartProducts={this.props.cartProducts}
                         loaderIcon={this.props.loaderIcon}
                         addBatchOfProducts={this.addBatchOfProducts}/>
    }
}

export default ProductsClass