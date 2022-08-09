import {handleActions} from 'redux-actions'
import {sign_in,logout} from '../action/signin.action.js'

const initialState={
	login:false
}

const signinReducer = handleActions(
	{
		[sign_in]:()=>({
			login:true
		}),
		[logout]:()=>({
			login:false
		})
	},
	initialState
)
export default signinReducer