import initialState from 'Utils/store/initialState.js'

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}

export default userReducers
