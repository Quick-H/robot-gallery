import {useSelector,useDispatch} from 'react-redux'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import {Home,Login,NotFound} from './pages'
import styles from './App.module.css'



function App() {
	  const login = useSelector(state => state.login.login)
	  const PrivateRoute = ({ children }) => {
	    return login? children : <Navigate to={'/login'} />
	  }
	  // const dispatch = useDispatch()
	  // useEffect(() => {
	  //   if (jwt) {
	  //     dispatch()
	  //   }
	  // },[jwt])
  return (
    <div className={styles.App}>
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<Navigate to={'/home'}/>} />
				<Route path={'home'} element={<PrivateRoute><Home/></PrivateRoute>}/>
				<Route path={'/login'} element={<Login/>} />
				<Route path='*' element={<NotFound/>}/>
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
