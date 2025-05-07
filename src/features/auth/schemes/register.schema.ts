import { z } from 'zod'

export const RegisterSchema = z
	.object({
		name: z
			.string()
			.min(2, { message: 'Name is required. min 2 characters.' }),
		email: z.string().email({ message: 'Email is incorrect.' }),
		password: z
			.string()
			.min(6, { message: 'Password is required. min 6 characters.' }),
		passwordRepeat: z
			.string()
			.min(6, { message: 'Password is required. min 6 characters.' })
	})
	.refine(data => data.password === data.passwordRepeat, {
		message: 'Passwords must match.',
		path: ['passwordRepeat']
	})

export type TypeRegisterSchema = z.infer<typeof RegisterSchema>
