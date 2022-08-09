import React from 'react'
import {Header,Footer} from '../index'

export const Layout = (props) => {
	return (
		<>
			<Header />
				<div className={'main'}>
					{props.children}
				</div>
			<Footer />
		</>
	)
}
