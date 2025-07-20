import * as zod from 'zod'
import { todoValidation } from '../zod/todo.zod'
import mongoose from 'mongoose'

type todoType = zod.infer<typeof todoValidation>

interface todoInterface extends todoType {
    completed: boolean,
    user: mongoose.Schema.Types.ObjectId
}


const todoSchema = new mongoose.Schema<todoInterface>(
    {
        task: {
            type: String,
            required: true,
            trim: true
        },
        completed: {
            type: Boolean,
            default: false
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }
)

export const Todo = mongoose.model("Todo", todoSchema)