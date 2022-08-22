import React from "react";
import { useNavigate, NavLink, Navigate, useLocation} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/action/signin.action.js";
import styles from "./Header.module.css";

export const Header = () => {
	const navigate = useNavigate();
	const login = useSelector((state) => state.login.login);
	const dispatch = useDispatch();
	const {path}=useLocation()
	const handleLogout = () => {
		dispatch(logout());
		return <Navigate t0={'/login'} state={path}/>
	};
	return (
		<div className={styles.header}>
			<div className={styles["header-content"]}>
				<div
					className={styles.logo}
					onClick={() => {
						navigate("/home");
					}}
				>
					<img src={"/logo192.png"} width="35" height="35" />
					<h3>React-Robots</h3>
				</div>
				<ul>
					<li>
						<NavLink to={login ? "/robots" : "/login"}>Robots</NavLink>
					</li>
					<li>
						<NavLink to={login ? "/monsters" : "/login"}>Monsters</NavLink>
					</li>
					<li>
						<NavLink to={login ? "/disembodied-heads" : "/login"}>
							Disembodied Heads
						</NavLink>
					</li>
					<li>
						<NavLink to={login ? "/kittens" : "/login"}>Kittens</NavLink>
					</li>
					<li>
						<NavLink to={login ? "/humans" : "/login"}>Humans</NavLink>
					</li>
				</ul>
				<div className={styles.btns}>
					{login ?(
						<button className={styles["login-btn"]} onClick={handleLogout}>
							退出登录
						</button>
					) : (
						<button
							className={styles["login-btn"]}
							onClick={() => {
								navigate("/login");
							}}
						>
							登录
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
