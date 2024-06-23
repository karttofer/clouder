import { combineReducers } from 'redux'
// Import your reducers here
import userReducers from 'Utils/store/reducers/userReducers.js'

const rootReducer = combineReducers({
  user: userReducers,
})

export default rootReducer
