// Utils
import {
  SAVE_REGISTRATION_STEP,
  IS_THIRD_PARTY_REGIS,
  SAVE_USER_REGISTRATION_INFORMATION,
  SAVE_GOOGLE_TEMP_INFORMATION,
  DELETE_ALL_USER_INFORMATION_FROM_STORE,
} from 'Utils/constants/store.js'

export const saveRegistrationStep = (regis_last_step) => ({
  type: SAVE_REGISTRATION_STEP,
  payload: { regis_last_step },
})

export const isThirdPartyRegisAction = (is_third_party_login) => ({
  type: IS_THIRD_PARTY_REGIS,
  payload: { is_third_party_login },
})

export const saveUserRegistrationAction = (payload) => ({
  type: SAVE_USER_REGISTRATION_INFORMATION,
  payload,
})

export const saveGoogleTempInformationAction = (payload) => ({
  type: SAVE_GOOGLE_TEMP_INFORMATION,
  payload,
})

export const deleteAllUnserInformationFromStoreAction = () => ({
  type: DELETE_ALL_USER_INFORMATION_FROM_STORE,
})
