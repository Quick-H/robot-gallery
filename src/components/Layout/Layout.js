import React from 'react'
import { Header, Footer } from '../index'
import styles from './Layout.module.css'

export const Layout = (props) => {
	return (
		<>
			<Header />
				<div className={styles.main}>
					{props.children}
				</div>
			<Footer />
		</>
	)
}
