import {instance} from "../config";

export const ProductsAPI = {
    setAllProducts: async (skip: number) => {
        try {
            const response = await instance.get(`products?limit=10&skip=${skip}`)
            return response.data.products;
        } catch (error) {
            console.log(error);
        }
    },

    setOneCategory: async (category: string, skip: number) => {
        try {
            const response = await instance.get(`products/category/${category}?limit=10&skip=${skip}`)
            return response.data.products
        } catch (error) {
            console.log(error)
        }
    },

    findProduct: async (product: string) => {
        try {
            const response = await instance.get(`products/search?q=${product}`)
            return response.data.products
        } catch (error) {
            console.log(error)
        }
    },

    setAllCategories: async () => {
        try {
            const response = await instance.get(`products/categories`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    },

}