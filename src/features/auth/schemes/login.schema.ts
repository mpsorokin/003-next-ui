import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Email is incorrect.' }),
  password: z
    .string()
    .min(6, { message: 'Password is required. min 6 characters.' })
})

export type TypeLoginSchema = z.infer<typeof LoginSchema>
