// Reducer
import initialState from 'Utils/store/initialState.js'
import {
  SAVE_USER_REGISTRATION_INFORMATION,
  SAVE_REGISTRATION_STEP,
  IS_THIRD_PARTY_REGIS,
  SAVE_GOOGLE_TEMP_INFORMATION,
  DELETE_ALL_USER_INFORMATION_FROM_STORE,
} from 'Utils/constants/store.js'

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_REGISTRATION_INFORMATION: {
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
    }
    case SAVE_REGISTRATION_STEP: {
      const { regis_last_step } = action.payload
      return {
        ...state,
        user: {
          ...state.user,
          regis_last_step,
        },
      }
    }
    case IS_THIRD_PARTY_REGIS: {
      const { is_third_party_login } = action.payload
      return {
        ...state,
        user: {
          ...state.user,
          is_third_party_login,
        },
      }
    }
    case SAVE_GOOGLE_TEMP_INFORMATION: {
      const { email, email_verified, family_name, given_name, name, picture } =
        action.payload
      const googleTempInformation = {
        email,
        email_verified,
        family_name,
        given_name,
        name,
        picture,
      }
      return {
        ...state,
        user: {
          ...state.user,
          googleTempInformation,
        },
      }
    }
    case DELETE_ALL_USER_INFORMATION_FROM_STORE: {
      return {
        ...initialState,
      }
    }
    default:
      return state
  }
}

export default userReducers
