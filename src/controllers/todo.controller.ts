import { Todo } from "../models/todo.model";

export const getAllTodos = async () => {
    const response = await Todo.find().populate("user")
    console.log(response)
    return response
}

export const getTodo = async (parent: any, {id}: {id: string}) => {
    console.log(id)
    await Todo.findById({id})
}

