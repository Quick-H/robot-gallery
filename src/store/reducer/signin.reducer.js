import {handleActions} from 'redux-actions'
import {log_in,log_out} from '../action/signin.action.js'

const initialState={
	login:false
}

const signinReducer = handleActions(
	{
		[log_in]:()=>({
			login:true
		}),
		[log_out]:()=>({
			login:false
		})
	},
	initialState
)
export default signinReducer