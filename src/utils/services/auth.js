// Env
import { LOCAL_BASE_URL } from 'Env'

export const googleAuthService = (payload, auth_method) => {
  const { nickname, email, picture } = payload
  return fetch(`${LOCAL_BASE_URL}/auth/google-auth`, {
    method: 'POST',
    body: JSON.stringify({
      nickname,
      email,
      picture,
      auth_method,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
export const loginService = (payload) => {
  const { email } = payload
  return fetch(`${LOCAL_BASE_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({
      email,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const getUserService = (payload) => {
  const { email } = payload

  return fetch(`${LOCAL_BASE_URL}/user`, {
    method: 'POST',
    body: JSON.stringify({
      email,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
