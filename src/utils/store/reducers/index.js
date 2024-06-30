import { combineReducers } from 'redux'
import userReducers from 'Utils/store/reducers/userReducers.js'

const rootReducer = combineReducers({
  state: userReducers,
})

export default rootReducer
