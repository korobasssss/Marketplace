import {connect} from "react-redux";
import {CartState} from "../../interface/cartInterface";
import {
    addOneCountProductToCart,
    deleteOneCountProductFromCart,
    deleteOneProductFromCart, setAllProductsInCart
} from "../../store/thunks/cartThunk";
import CartClass from "./CartClass";


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
    deleteOneCountProductFromCart,
    setAllProductsInCart
}
export const CartContainer = connect(mapStateToProps, mapDispatchToProps)(CartClass)