import React, {Component} from "react";
import {
    SelectionLinePropsClassInterface,
    SelectionLineStateInterface
} from "../../interface/selectionLineInterface";
import SelectionLine from "./SelectionLine";

class SelectionLineClass extends Component<SelectionLinePropsClassInterface, SelectionLineStateInterface> {

    componentDidMount() {
        this.props.getAllCategoryNames()
    }

    setInputSearch = (inputSearch: string) => {
        this.props.setInputSearch(inputSearch)
        this.props.findProduct(inputSearch)
    }
    chooseCategory = (type: string, index: number) => {
        this.props.getCategory(type, index)
    }

    deleteInputSearch = () => {
        this.props.setInputSearch('')
        this.props.findProduct('')
    }
    render() {
        return <SelectionLine categories={this.props.categories}
                              inputSearch={this.props.inputSearch}
                              setInputSearch={this.setInputSearch}
                              chooseCategory={this.chooseCategory}
                              deleteInputSearch={this.deleteInputSearch}
                              cartProducts={this.props.cartProducts}
                              countCartProducts={this.props.countCartProducts}/>;
    }
}

export default SelectionLineClass