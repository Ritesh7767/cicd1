import mongoose from "mongoose";
import { userValidation } from "../zod/user.zod";
import * as zod from 'zod'

type userType = zod.infer<typeof userValidation>

const userSchema = new mongoose.Schema<userType>(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
    }
)

export const User = mongoose.model<userType>("User", userSchema)

