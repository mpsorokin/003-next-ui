import { TypeLoginSchema, TypeRegisterSchema } from '@/features/auth/schemes'
import { IUser } from '@/features/auth/services/user.types'

import { api } from '@/shared/api/instance.api'

class AuthService {
  async register(body: TypeRegisterSchema) {
    const response = api.post<IUser>('auth/register', body)

    return response
  }

  async login(body: TypeLoginSchema) {
    const response = api.post<IUser>('auth/login', body)

    return response
  }

  async logout() {
    const response = await api.post('auth/logout')

    return response
  }
}

export const authService = new AuthService()
