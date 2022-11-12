import { axiosPrivate } from "../api/config"
import { User } from "../interfaces/user.interface"

export const getUsers = async () => {
    const response: any = await axiosPrivate.get('/users')
    return response.data as User[];
    }
export const newUsers = async (data: User) => {
    const response: any = await axiosPrivate.post('/users', data)
    return response
    }
export const deleteUsers = async (id: string) => {
    const response: any = await axiosPrivate.delete(`/users/${id}`)
    return response
    }