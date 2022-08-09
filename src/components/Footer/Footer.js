import React from 'react'
import styles from './Footer.module.css'
export const Footer = () => {
	return(
		<div className={styles.footer}>
			<div className={styles['footer-content']}>
				<p>Copyright &copy; 2022 Nicholas</p>
			</div>
		</div>
	)
}
