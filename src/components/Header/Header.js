import React ,{ useState}from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../../store/action/signin.action.js'
import styles from './Header.module.css'

export const Header = () => {
	const navigate=useNavigate()
	const login=useSelector(state=>state.login)
	const dispatch=useDispatch()
	const handleLogout=()=>{
		dispatch(logout())
		navigate('/login')
	}
	return(
		<div className={styles.header}>
			<div className={styles['header-content']}>
				<img src={'/logo192.png'} width="35" height="35" onClick={() => {navigate('/')}}/>
				<h3>Robot</h3>
				<div className={styles.btns}>
					{login? <button className={styles['login-btn']} onClick={handleLogout}>退出登录</button>:<div>登录</div>}
				</div>
			</div>
		</div>
	)
}
