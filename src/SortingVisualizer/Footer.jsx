import { Button } from '@material-ui/core'
import './Footer.css'
import Grid from '@material-ui/core/Grid'
import React from 'react'

const Footer = (props) => {
	const resetArray = props.resetArray
	const mergeSort = props.mergeSort
	const insertionSort = props.insertionSort
	const selectionSort = props.selectionSort
	const bubbleSort = props.bubbleSort
	const quickSort = props.quickSort

	return (
		<div className='footer'>
			<Button variant='text' color='primary' onClick={resetArray}>
				Generate new array
			</Button>
			<Button variant='text' color='primary' onClick={mergeSort}>
				Merge Sort
			</Button>
			<Button variant='text' color='primary' onClick={insertionSort}>
				Insertion Sort
			</Button>
			<Button variant='text' color='primary' onClick={selectionSort}>
				Selection Sort
			</Button>
			<Button variant='text' color='primary' onClick={bubbleSort}>
				Bubble Sort
			</Button>
			<Button variant='text' color='primary' onClick={quickSort}>
				Quick Sort
			</Button>
		</div>
	)
}

export default Footer
