import { User } from "../models/user.model"

export const getAllUsers = async () => {
    return await User.find()
}

export const getUser = async(id: string) => {
    return await User.findById({id})
}



