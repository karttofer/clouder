import { SAVE_REGISTRATION_STEP } from 'Utils/constants/store.js'

export const saveRegistrationStep = (regis_last_step) => ({
  type: SAVE_REGISTRATION_STEP,
  payload: { regis_last_step },
})
