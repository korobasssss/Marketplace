const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY'
const SET_INPUT_SEARCH = 'SET_INPUT_SEARCH'

const initialState = {
    categories:
        [
            {type: 'all', isActive: true},
            {type: 'smartphones', isActive: false},
            {type: 'laptops', isActive: false},
            {type: 'fragrances', isActive: false},
            {type: 'skincare', isActive: false},
            {type: 'groceries', isActive: false},
            {type: 'home-decoration', isActive: false},
            {type: 'furniture', isActive: false},
            {type: 'tops', isActive: false},
            {type: 'womens-dresses', isActive: false},
            {type: 'womens-shoes', isActive: false},
            {type: 'mens-shirts', isActive: false},
            {type: 'mens-shoes', isActive: false},
            {type: 'mens-watches', isActive: false},
            {type: 'womens-watches', isActive: false},
            {type: 'womens-bags', isActive: false},
            {type: 'womens-jewellery', isActive: false},
            {type: 'sunglasses', isActive: false},
            {type: 'automotive', isActive: false},
            {type: 'motorcycle', isActive: false},
            {type: 'lighting', isActive: false}
        ],
    inputSearch: ''
}

const selectionReducer = (state = initialState, action: any) => {
    let stateCopy = {...state, categories: [...state.categories]}
    switch (action.type) {
        case SET_ACTIVE_CATEGORY : {
            for (let index = 0; index < stateCopy.categories.length; index++) {
                stateCopy.categories[index].isActive = index === action.index;

            }
            return stateCopy
        }
        case SET_INPUT_SEARCH : {
            stateCopy.inputSearch = action.inputSearch
            return stateCopy
        }
        default: {
            return stateCopy
        }
    }
}

export const setActiveCategory = (index: number) => {
    return {
        type: SET_ACTIVE_CATEGORY, index
    }
}

export const setInputSearch = (inputSearch: string) => {
    return {
        type: SET_INPUT_SEARCH, inputSearch
    }
}

export default selectionReducer