'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { AuthWrapper } from '@/features/auth/components/AuthWrapper'
import { useLoginMutation } from '@/features/auth/hooks/useLoginMutation'
import { LoginSchema, TypeLoginSchema } from '@/features/auth/schemes'

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from '@/shared/components/ui'

export function LoginForm() {
  const form = useForm<TypeLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const { login, isLoadingLogin } = useLoginMutation()

  const onHandleSubmit = async (values: TypeLoginSchema) => {
    console.log(values)
    login({ values })
  }

  return (
    <AuthWrapper
      heading='Login'
      description='Input email and password'
      backButtonLabel='No account?'
      backButtonHref='/auth/register'
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onHandleSubmit)}
          className='grid gap-2 space-y-2'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoadingLogin}
                    placeholder='test@mail.com'
                    type='email'
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoadingLogin}
                    placeholder='***'
                    type='password'
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoadingLogin} type='submit'>
            Log in
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  )
}
