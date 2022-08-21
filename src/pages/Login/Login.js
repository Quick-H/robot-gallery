import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sign_in } from "../../store/action/signin.action.js";
import styles from "./Login.module.css";

export const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { state } = useLocation();

	const returnURL = state?.returnURL || "/home";
	const handleLogin = () => {
		dispatch(sign_in());
		navigate(returnURL, { replace: true });
	};
	return (
		<div className={styles.login}>
			<div className={styles["login-wrap"]}>
				<div className={styles["login-box"]}>
					<div className={styles["login-content"]}>
						<h3>Login</h3>
						<p>
							<label>
								账号：
								<input type="input" defaultValue="Adolf" />
							</label>
						</p>
						<p>
							<label>
								密码：
								<input type="password" defaultValue="admin" />
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
