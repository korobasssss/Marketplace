import {instance} from "../config";

export const ProductsAPI = {
    setAllProducts: async () => {
        try {
            const response = await instance.get('products')
            return response.data.products;
        } catch (error) {
            console.log(error);
        }
    },

    setOneCategory: async (category: string) => {
        try {
            const response = await instance.get(`products/category/${category}`)
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
}