'use client'

import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { TypeRegisterSchema } from '@/features/auth/schemes'
import { authService } from '@/features/auth/services/auth.service'

import { toastMessageHandler } from '@/shared/utils/toast-message-handler'

export function useRegisterMutation() {
  const { mutate: register, isPending: isLoadingRegister } = useMutation({
    mutationKey: ['register user'],
    mutationFn: ({ values }: { values: TypeRegisterSchema }) =>
      authService.register(values),
    onSuccess() {
      toast.success('Register successful', {
        description: 'Proof the mail. Mail was sent to mailbox'
      })
    },
    onError(error: Error) {
      toastMessageHandler(error)
    }
  })

  return { register, isLoadingRegister }
}
