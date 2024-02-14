export interface SelectionLineInterface {
    selectionLine : {
        categories: CategoriesArr[],
        inputSearch: string
    }
}

export interface SelectionLineStateInterface {
    categories: CategoriesArr[],
    inputSearch: string
}

export interface CategoriesArr {
    type: string,
    isActive: boolean
}

export interface SelectionLinePropsClassInterface {
    categories: CategoriesArr[]
    inputSearch: string
    setInputSearch(product: string): void
    findProduct(product: string): void
    //setAllProducts(): void
    getCategory(type: string, index: number): void
}
export interface SelectionLinePropsInterface {
    categories: CategoriesArr[]
    inputSearch: string
    setInputSearch(product: string): void
    chooseCategory(type: string, index: number): void
    deleteInputSearch():void
}


