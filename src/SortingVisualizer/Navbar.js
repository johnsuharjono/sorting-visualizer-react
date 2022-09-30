import { Button } from '@material-ui/core'
import './Navbar.css'
import { Typography } from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort'
import React from 'react'

const Navbar = (props) => {
	const resetArray = props.resetArray
	return (
		<div className='navbar'>
			<div className='logo'>
				<SortIcon fontsize='large' style={{ color: 'rgb(252 231 243)' }} />
				<Typography variant='h4' style={{ color: 'rgb(252 231 243)' }}>
					SortViz
				</Typography>
			</div>
			<div className='reset-array'>
				<Button variant='contained' color='primary' onClick={resetArray}>
					<Typography>Generate New Array</Typography>
				</Button>
			</div>
		</div>
	)
}

export default Navbar
