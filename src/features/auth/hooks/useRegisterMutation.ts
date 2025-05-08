import { useMutation } from '@tanstack/react-query'

import { TypeRegisterSchema } from '@/features/auth/schemes'
import { authService } from '@/features/auth/services/auth.service'

export function useRegisterMutation() {
	const {} = useMutation({
		mutationKey: ['register user'],
		mutationFn: ({ values }: { values: TypeRegisterSchema }) =>
			authService.register(values),
		onSuccess() {},
		onError() {}
	})
}
