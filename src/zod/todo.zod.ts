import * as z from 'zod'

export const todoValidation = z.object({
    task: z.string().min(1, "Task cannot be empty"),
})