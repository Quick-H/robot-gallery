import { takeEvery,put} from 'redux-saga/effects'
import axios from 'axios'
import {log_in,log_in_success} from '../action/signin.action.js'

function* log_in_data(action){
	let data = yield axios.post('/login',{...action.payload}).then(res=>res.data)
	yield put(log_in_success(data.meta.status))
}

export default function* signinSaga(){
	yield takeEvery(log_in,log_in_data)
}