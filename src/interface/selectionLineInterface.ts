import {OneProductCartInterface} from "./oneSelectedProductInterface";
import {getAllCategoryNames} from "../store/thunks/selectionLineThunk";

export interface SelectionLineInterface {
    selectionLine : {
        categories: CategoriesArr[],
        inputSearch: string
    }
    cart: {
        cartProducts: OneProductCartInterface[],
        count: number
    }
}

export interface SelectionLineStateInterface {
    categories: CategoriesArr[],
    inputSearch: string,
}

export interface CategoriesArr {
    type: string,
    isActive: boolean
}

export interface SelectionLinePropsClassInterface {
    categories: CategoriesArr[]
    inputSearch: string

    cartProducts: OneProductCartInterface[],
    countCartProducts: number

    setInputSearch(product: string): void
    findProduct(product: string): void
    getAllCategoryNames(): void
    getCategory(type: string, index: number): void
}
export interface SelectionLinePropsInterface {
    categories: CategoriesArr[]
    inputSearch: string

    cartProducts: OneProductCartInterface[],
    countCartProducts: number

    setInputSearch(product: string): void
    chooseCategory(type: string, index: number): void
    deleteInputSearch():void
}


