// Reducer
import initialState from 'Utils/store/initialState.js'
import {
  SAVE_USER_REGISTRATION_INFORMATION,
  SAVE_REGISTRATION_STEP,
  IS_THIRD_PARTY_REGIS,
} from 'Utils/constants/store.js'

const userReducers = (state = initialState, action) => {
  console.log(action.type, 'action.type')
  switch (action.type) {
    case SAVE_USER_REGISTRATION_INFORMATION:
      const { email, user_token, nickname } = action.payload

      return {
        ...state,
        user: {
          ...state.user,
          email,
          user_token,
          nickname,
        },
      }
    case SAVE_REGISTRATION_STEP:
      const { regis_last_step } = action.payload
      console.log('regis_last_step', regis_last_step)
      return {
        ...state,
        user: {
          ...state.user,
          regis_last_step,
        },
      }

    case IS_THIRD_PARTY_REGIS:
      const { is_third_party_login } = action.payload
      return {
        ...state,
        user: {
          ...state.user,
          is_third_party_login,
        },
      }
    default:
      return state
  }
}

export default userReducers
