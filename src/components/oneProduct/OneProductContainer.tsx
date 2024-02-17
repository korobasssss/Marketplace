import {connect} from "react-redux";
import {addOneProductToCart, deleteOneProductFromCart} from "../../store/thunks/cartThunk";
import OneProductClass from "./OneProductClass";



const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = {
    addOneProductToCart,
    deleteOneProductFromCart,
}
export const OneSelectedProductContainer = connect(mapStateToProps, mapDispatchToProps)(OneProductClass)