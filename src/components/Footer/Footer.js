import React from 'react'
import styles from './Footer.module.css'
export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles["footer-content"]}>
				<p>
					本页面图片素材均来自：
					<a href="https://robohash.org" target="__blank">https://robohash.org</a>
				</p>
				<p>Copyright &copy; 2022 Nicholas</p>
			</div>
		</div>
	);
}
