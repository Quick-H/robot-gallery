import React ,{useRef, useEffect}from "react";
import axios from 'axios'
import { useNavigate, useLocation} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { log_in } from "../../store/action/signin.action.js";
import styles from "./Login.module.css";

export const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const login = useSelector((state) => state.login.login)
	
	const { state } = useLocation();
	const returnURL = state?.returnURL || "/home";
	const userName = useRef()
	const passWord = useRef()
	
	const handleLogin = async (ev) => {
		ev.preventDefault()
		const username=userName.current.value
		const password=passWord.current.value
		if(!username||!password) return
		
		const userInfo={
			username,
			password 
		}
		let data = await axios.post('/login',userInfo).then(res=>res.data)
		if(data.meta.status!==200) {
			alert('登录失败')
			return false
		}
		dispatch(log_in())
	};
	useEffect(()=>{
		if(login){
			navigate(returnURL,{replace:true})
		}
	},[login])
	return (
		<div className={styles.login}>
			<div className={styles["login-wrap"]}>
				<div className={styles["login-box"]}>
					<div className={styles["login-content"]}>
						<h3>Login</h3>
						<p>
							<label>
								账号：
								<input type="input" ref={userName} defaultValue={'admin'}/>
							</label>
						</p>
						<p>
							<label>
								密码：
								<input type="password" ref={passWord} defaultValue={123456}/>
							</label>
						</p>
						<div className={styles.btns}>
							<button className={styles["register-btn"]} onClick={handleLogin}>
								注册
							</button>
							<button className={styles["login-btn"]} onClick={handleLogin}>
								登录
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
