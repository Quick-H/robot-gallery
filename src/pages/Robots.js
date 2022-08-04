import {useEffect,useState} from 'react'
import axios from 'axios'
import styles from './Robots.module.css'


const Robots = ()=>{
	const [users,setUsers]=useState([])
	const [loading,setLoading]=useState(false)
	const fetchData=async ()=>{
		setLoading(true)
		await axios('/robots')
		// .then(res=>console.log(res.data.list))
		.then(res=>setUsers([...res.data.list]))
		setLoading(false)
		}
	useEffect(()=>{
		fetchData()
	},[])
	
	return(
		<>
			
			<div className={styles.robots}>
				<h3>Robot Gallery</h3>
				{loading?
					<div className={styles.loading}>loading...</div>:
					<ul>
						{users.map(item=>(<li key={item.id}>
							<img src={`https://robohash.org/${item.id}`} alt='图片'/>
							<h5>{item.name}</h5>
						</li>))}
					</ul>
				}
			</div>
		</>
	)
	
}
export default Robots 