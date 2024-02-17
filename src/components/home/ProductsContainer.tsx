import {connect} from "react-redux";
import {ProductsInCartState, ProductsStateClass} from "../../interface/productsInterface";
import {setAllProducts} from "../../store/thunks/productsThunk";
import ProductsClass from "./ProductsClass";

const mapStateToProps = (state: ProductsStateClass & ProductsInCartState) => {
    return {
        products: state.products.products,
        cartProducts: state.cart.cartProducts
    }
}

const mapDispatchToProps = {
    setAllProducts: setAllProducts
}
export const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(ProductsClass)