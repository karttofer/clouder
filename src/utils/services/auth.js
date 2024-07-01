import { LOCAL_BASE_URL } from 'Env'

export const googleAuthService = (payload, auth_method) => {
  const { name, email, picture, email_verified } = payload
  return fetch(`${LOCAL_BASE_URL}/auth/google-auth`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
      picture,
      email_verified,
      auth_method,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
