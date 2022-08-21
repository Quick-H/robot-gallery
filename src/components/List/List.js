import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./List.module.css";

export function List({title,sets}) {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchData = async () => {
		setLoading(true);
		await axios("/robots")
			// .then(res=>console.log(res.data.list))
			.then((res) => setUsers([...users, ...res.data.list]));
		setLoading(false);
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<div className={styles.robots}>
				<h3>{title}</h3>
				{loading ? (
					<div className={styles.loading}>loading...</div>
				) : (
					<ul>
						{users.map((item) => (
							<li key={item.id}>
								{item.discount && <p className={styles.discount}>打折商品</p>}
								<img src={`https://robohash.org/${item.id}${sets}`} alt="图片" />
								<h5>{item.name}</h5>
							</li>
						))}
					</ul>
				)}
				<p onClick={fetchData} className={styles["loading-more"]}>
					点击可加载更多...
				</p>
			</div>
		</>
	);
}
