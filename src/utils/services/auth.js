// Env
import { LOCAL_BASE_URL, GOOGLE_USER_INFO_URL } from 'Env'

// Constants
import { CONFIRM_EMAIL } from 'Utils/constants/magicStrings.js'

// TODO: check this, why auth_method?
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

export const registrationService = (payload) => {
  const { email, nickname } = payload
  return fetch(`${LOCAL_BASE_URL}/auth/register`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      nickname,
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

export const createMagicLinkService = (payload) => {
  const { email } = payload

  return fetch(`${LOCAL_BASE_URL}/auth/magic-link`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      verification_type: CONFIRM_EMAIL,
    }),
  })
}

export const googlerUserInformationService = (accessToken) => {
  return fetch(GOOGLE_USER_INFO_URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}
