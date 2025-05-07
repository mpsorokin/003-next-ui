import { AuthWrapper } from '@/features/auth/components/AuthWrapper'

export function RegisterForm() {
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
