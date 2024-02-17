import {SelectionLineInterface} from "../../interface/selectionLineInterface";
import {findProduct, getCategory} from "../../store/thunks/selectionLineThunk";
import {connect} from "react-redux";
import {setInputSearch} from "../../store/reducers/selectionLineReducer";
import SelectionLineClass from "./SelectionLineClass";

const mapStateToProps = (state : SelectionLineInterface) => {
    return {
        categories: state.selectionLine.categories,
        inputSearch: state.selectionLine.inputSearch,

        cartProducts: state.cart.cartProducts,
        countCartProducts: state.cart.count
    }
}

const mapDispatchToProps  = {
    setInputSearch,
    findProduct,
    getCategory
}

export const SelectionLineContainer = connect(mapStateToProps, mapDispatchToProps)(SelectionLineClass)