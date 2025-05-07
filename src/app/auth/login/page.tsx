import type { Metadata } from 'next'

import { LoginForm } from '@/features/auth/components/LoginForm'

export const metadata: Metadata = {
	title: 'Login',
	description: ''
}

export default function LoginPage() {
	return <LoginForm />
}
