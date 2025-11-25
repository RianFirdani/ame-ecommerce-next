import { axiosInstance } from "../axios/axios"

export const getProducts = async ()=>{
    const Products = await axiosInstance.get('api/products')
    return Products.data
}