import {combineReducers} from 'redux'
import signinReducer from './signin.reducer'

const reducer = combineReducers({
	login:signinReducer
})

export default reducer