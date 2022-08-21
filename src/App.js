import { useSelector } from "react-redux";
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	useLocation,
} from "react-router-dom";
import {
	Home,
	Login,
	NotFound,
	Robots,
	Monsters,
	DisembodiedHeads,
	Kittens,
	Humans,
} from "./pages";
import styles from "./App.module.css";
import { Layout } from "./components";

function App() {
	const login = useSelector((state) => state.login.login);
	const PrivateRoute = ({ children }) => {
		const { pathname } = useLocation();
		return login ? (
			children
		) : (
			<Navigate to={"/login"} state={{ returnURL: pathname }} />
		);
	};

	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path={"/"} element={<Navigate to={"/robots"} />} />
						<Route path={"/home"} element={<Home />} />
						<Route
							path={"/robots"}
							element={
								<PrivateRoute>
									<Robots />
								</PrivateRoute>
							}
						/>
						<Route
							path={"/monsters"}
							element={
								<PrivateRoute>
									<Monsters />
								</PrivateRoute>
							}
						/>
						<Route
							path={"/disembodied-heads"}
							element={
								<PrivateRoute>
									<DisembodiedHeads />
								</PrivateRoute>
							}
						/>
						<Route
							path={"/kittens"}
							element={
								<PrivateRoute>
									<Kittens />
								</PrivateRoute>
							}
						/>
						<Route
							path={"/humans"}
							element={
								<PrivateRoute>
									<Humans />
								</PrivateRoute>
							}
						/>
						<Route path={"/login"} element={<Login />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
