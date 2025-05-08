import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { TypeLoginSchema } from '@/features/auth/schemes'
import { authService } from '@/features/auth/services/auth.service'

import { toastMessageHandler } from '@/shared/utils/toast-message-handler'

export function useLoginMutation() {
  const { mutate: login, isPending: isLoadingLogin } = useMutation({
    mutationKey: ['login user'],
    mutationFn: ({ values }: { values: TypeLoginSchema }) =>
      authService.login(values),
    onSuccess() {
      toast.success('Login successful', {
        description: 'Woo Hoo'
      })
    },
    onError(error: Error) {
      toastMessageHandler(error)
    }
  })

  return { login, isLoadingLogin }
}
