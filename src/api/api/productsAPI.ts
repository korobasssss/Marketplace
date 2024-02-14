import {instance} from "../config";

export const ProductsAPI = {
    setCurrentProducts: async () => {
        try {
            const response = await instance.get('/products');
            return response.data.products;
        } catch (error) {
            console.log(error);
        }
    }
}