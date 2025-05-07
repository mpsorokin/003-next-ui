import { z } from 'zod'

export const LoginSchema = z.object({
	name: z.string().min(2, { message: 'Name is required. min 2 characters.' }),
	email: z.string().email({ message: 'Email is incorrect.' }),
	password: z
		.string()
		.min(6, { message: 'Password is required. min 6 characters.' })
})

export type TypeLoginSchema = z.infer<typeof LoginSchema>
