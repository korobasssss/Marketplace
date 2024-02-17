import {connect} from "react-redux";
import {CartState} from "../../interface/cartInterface";
import Cart from "./Cart";
import {
    addOneCountProductToCart,
    deleteOneCountProductFromCart,
    deleteOneProductFromCart
} from "../../store/thunks/cartThunk";


const mapStateToProps = (state: CartState) => {
    return {
        cartProducts: state.cart.cartProducts,
        count: state.cart.count,
        price: state.cart.price
    }
}

const mapDispatchToProps = {
    deleteOneProductFromCart,
    addOneCountProductToCart,
    deleteOneCountProductFromCart
}
export const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)