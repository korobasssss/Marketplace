import {connect} from "react-redux";
import {ProductsInCartState, ProductsStateClass} from "../../interface/productsInterface";
import {addBatchOfProducts, setAllProducts} from "../../store/thunks/productsThunk";
import ProductsClass from "./ProductsClass";

const mapStateToProps = (state: ProductsStateClass & ProductsInCartState) => {
    return {
        products: state.products.products,
        activeCategory: state.selectionLine.activeCategory,
        loaderIcon: state.products.loaderIcon,
        cartProducts: state.cart.cartProducts
    }
}

const mapDispatchToProps = {
    setAllProducts,
    addBatchOfProducts
}
export const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(ProductsClass)