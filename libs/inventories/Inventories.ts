import { axiosInstance } from "../axios/axios"

export const getAllInventories =async ()=>{
    const res = await axiosInstance.get('api/inventories')

    return res.data
}