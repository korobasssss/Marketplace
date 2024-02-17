import {CategoriesArr} from "../../interface/selectionLineInterface";

const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY'
const SET_INPUT_SEARCH = 'SET_INPUT_SEARCH'

const initialState: { categories: CategoriesArr[], inputSearch: string } = {
    categories: [],
    inputSearch: ''
}

const selectionReducer = (state = initialState, action: any) => {
    let stateCopy = {...state, categories: [...state.categories]}
    switch (action.type) {
        case GET_ALL_CATEGORIES : {
            stateCopy.categories = []
            stateCopy.categories.push(
                {
                    type: 'all',
                    isActive: true
                }
            )
            for (let i = 0; i < action.categories.length; i++) {
                stateCopy.categories.push(
                    {
                        type: action.categories[i],
                        isActive: false
                    }
                )
            }
            debugger
            return stateCopy
        }
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

export const getAllCategories = (categories: string[]) => {
    return {
        type: GET_ALL_CATEGORIES, categories
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