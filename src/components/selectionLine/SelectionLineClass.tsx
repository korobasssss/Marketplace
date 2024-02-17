import React, {Component} from "react";
import {
    SelectionLinePropsClassInterface,
    SelectionLineStateInterface
} from "../../interface/selectionLineInterface";
import SelectionLine from "./SelectionLine";

class SelectionLineClass extends Component<SelectionLinePropsClassInterface, SelectionLineStateInterface> {

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
                              deleteInputSearch={this.deleteInputSearch}/>;
    }
}

export default SelectionLineClass