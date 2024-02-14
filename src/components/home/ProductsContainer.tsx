import {connect} from "react-redux";
import {ProductsStateClass} from "../interface/productsInterface";
import {setCurrProducts} from "../../store/thunks/productsThunk";
import ProductsClass from "./ProductsClass";

const mapStateToProps = (state: ProductsStateClass) => {
    return {
        products: state.products.products
    }
}

const mapDispatchToProps = {
    setCurrProducts
}
export const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(ProductsClass)