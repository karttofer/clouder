// Utils
import {
  SAVE_REGISTRATION_STEP,
  IS_THIRD_PARTY_REGIS,
} from 'Utils/constants/store.js'

export const saveRegistrationStep = (regis_last_step) => ({
  type: SAVE_REGISTRATION_STEP,
  payload: { regis_last_step },
})

export const isThirdPartyRegisAction = (is_third_party_login) => ({
  type: IS_THIRD_PARTY_REGIS,
  payload: { is_third_party_login },
})
