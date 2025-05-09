'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { AuthWrapper } from '@/features/auth/components/AuthWrapper'
import { useRegisterMutation } from '@/features/auth/hooks/useRegisterMutation'
import { RegisterSchema, TypeRegisterSchema } from '@/features/auth/schemes'

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

  const { register, isLoadingRegister } = useRegisterMutation()

  const onHandleSubmit = async (values: TypeRegisterSchema) => {
    console.log(values)
    register({ values })
    toast.info('Register successfully.')
  }

  return (
    <AuthWrapper
      heading='Register'
      description='Input email and password'
      backButtonLabel='Already have an account?'
      backButtonHref='/auth/login'
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onHandleSubmit)}
          className='grid gap-2 space-y-2'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoadingRegister}
                    placeholder='John Doe'
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoadingRegister}
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
                    disabled={isLoadingRegister}
                    placeholder='******'
                    type='password'
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='passwordRepeat'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password Repeat</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoadingRegister}
                    placeholder='******'
                    type='password'
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoadingRegister} type='submit'>
            Create account
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  )
}
