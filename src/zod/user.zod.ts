import * as z from 'zod'

export const userValidation = z.object({
    username: z.string().min(4, "Username is too short"),
    email: z.email(),
    password: z.string().min(8, "Password is too short")
})

