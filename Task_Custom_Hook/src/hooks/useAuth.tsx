
import { useState } from 'react'
import { AuthService, LoginDTO, User } from '../services/auth-service'
function useAuth(authService: AuthService) {
  const [user, setUser] = useState<User | null>(null)

  const login = async (dto: LoginDTO) => {
    const u = await authService.login(dto)
    setUser(u)
  }

  return { user, login }
}

export default useAuth