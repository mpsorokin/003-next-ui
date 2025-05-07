'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { AuthWrapper } from '@/features/auth/components/AuthWrapper'
import { RegisterSchema, TypeRegisterSchema } from '@/features/auth/schemes'

export function RegisterForm() {
	const form = useForm<TypeRegisterSchema>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			passwordRepeat: ''
		}
	})

	const onSubmit = async (values: TypeRegisterSchema) => {
		console.log(values)
	}

	return (
		<AuthWrapper
			heading='Register'
			description='Input email and password'
			backButtonLabel='Already have an account?'
			backButtonHref='/auth/login'
		>
			Reg
		</AuthWrapper>
	)
}
