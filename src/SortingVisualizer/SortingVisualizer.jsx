import React, { useEffect, useState } from 'react'
import './SortingVisualizer.css'
import { getMergeSortAnimations } from '../SortingAlgorithm/mergeSort'
import { getInsertionSortAnimations } from '../SortingAlgorithm/insertionSort'
import { getSelectionSortAnimations } from '../SortingAlgorithm/selectionSort'
import { getBubbleSortAnimations } from '../SortingAlgorithm/bubbleSort'
import { getQuickSortAnimations } from '../SortingAlgorithm/quickSort'
import { makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import Navbar from './Navbar'
import Footer from './Footer'

const useStyles = makeStyles({
	root: {
		alignContent: 'center',
		alignItems: 'center',
		justify: 'center',
	},
})

const L_BOUND = 50 // minimum height of the array
const U_BOUND = 350 // maximum height of the array
const COMPARISON_COLOUR = 'rgb(251 207 232)'
const SORTED_COLOUR = 'rgb(157 23 77)'

export default function SortingVisualizer() {
	const [array, setArray] = useState([])
	const [isSorting, setIsSorting] = useState(false)
	const [isSorted, setIsSorted] = useState(false)
	const [lengthArray, setLengthArray] = useState(40)
	const [delay, setDelay] = useState(8)

	// eslint-disable-next-line
	useEffect(resetArray, [lengthArray])

	const mergeSort = () => {
		const animations = getMergeSortAnimations(array)
		animate(animations)
	}

	const insertionSort = () => {
		const animations = getInsertionSortAnimations(array)
		animate(animations)
	}

	const selectionSort = () => {
		const animations = getSelectionSortAnimations(array)
		animate(animations)
	}

	const bubbleSort = () => {
		const animations = getBubbleSortAnimations(array)
		animate(animations)
	}
	const quickSort = () => {
		const animations = getQuickSortAnimations(array)
		animate(animations)
	}

	const animate = (animations) => {
		if (isSorting) return // does not interrupt when we are sorting
		if (isSorted) resetArrayColour()
		setIsSorted(false)
		setIsSorting(true)
		animations.forEach(([comparison, swapped], index) => {
			setTimeout(() => {
				if (!swapped) {
					if (comparison.length === 2) {
						const [i, j] = comparison
						showComparison(i)
						showComparison(j)
					} else {
						const [i] = comparison
						showComparison(i)
					}
				} else {
					setArray((prevArr) => {
						if (comparison.length === 4) {
							const [k1, newValue1, k2, newValue2] = comparison
							const newArr = prevArr.slice()
							newArr[k1] = newValue1
							newArr[k2] = newValue2
							return newArr
						} else {
							const [k, newValue] = comparison
							const newArr = prevArr.slice()
							newArr[k] = newValue
							return newArr
						}
					})
				}
			}, index * delay)
		})
		setTimeout(() => {
			animateSortedArray()
		}, animations.length * delay * 1.02) // animations.length ensure change the colour when the array already sorted
	}

	function showComparison(index) {
		const arrayBars = document.getElementsByClassName('array-bar')
		const arrayBarStyle = arrayBars[index].style
		setTimeout(() => {
			arrayBarStyle.backgroundColor = COMPARISON_COLOUR
		}, delay)
		setTimeout(() => {
			arrayBarStyle.backgroundColor = ''
		}, delay * 2)
	}

	function animateSortedArray() {
		const arrayBars = document.getElementsByClassName('array-bar')
		for (let i = 0; i < arrayBars.length; i++) {
			const arrayBarStyle = arrayBars[i].style
			setTimeout(
				() => (arrayBarStyle.backgroundColor = SORTED_COLOUR),
				i * delay
			)
		}
		setTimeout(() => {
			setIsSorted(true)
			setIsSorting(false)
		}, arrayBars.length * delay)
	}

	function resetArrayColour() {
		const arrayBars = document.getElementsByClassName('array-bar')
		for (let i = 0; i < array.length; i++) {
			const arrayBarStyle = arrayBars[i].style
			arrayBarStyle.backgroundColor = ''
		}
	}

	function resetArray() {
		if (isSorting) return
		if (isSorted) resetArrayColour()
		setIsSorted(false)
		const arr = []
		for (let i = 0; i < lengthArray; i++) {
			arr.push(random(L_BOUND, U_BOUND))
		}
		setArray(arr)
		console.log(arr)
	}

	const handleSpeed = (event, newValue) => {
		if (isSorting) return
		setDelay(newValue)
	}

	const handleChange = (event, newValue) => {
		if (isSorting) return
		setLengthArray(newValue)
	}

	return (
		<>
			<Navbar resetArray={resetArray} />
			<div className='visualizer-container'>
				<div className='controlPanel'>
					<div>
						<p>Adjust Delay!</p>
						<Slider
							className='slider'
							value={delay}
							onChange={handleSpeed}
							aria-labelledby='continuous-slider'
							min={2}
							max={15}
						/>
					</div>

					<div>
						<p>Number of Array!</p>
						<Slider
							className='slider'
							value={lengthArray}
							onChange={handleChange}
							aria-labelledby='continuous-slider'
							min={10}
							max={70}
						/>
					</div>
				</div>
				{/* <Grid
					container
					spacing={0}
					direction='row'
					justify='center'
					alignItems='center'
				>
					<Grid item xs='1'>
						<RemoveIcon />
					</Grid>
					<Grid item xs='1'>
						<Slider
							value={lengthArray}
							onChange={handleChange}
							aria-labelledby='continuous-slider'
							min={10}
							max={70}
						/>
					</Grid>
					<Grid item xs='1'>
						<AddIcon />
					</Grid>
				</Grid> */}

				<div className='array-container'>
					{array.map((barHeight, index) => (
						<div
							className='array-bar'
							style={{
								height: `${barHeight}px`,
								width: `${700 / lengthArray}px`,
							}}
							key={index}
						></div>
					))}
				</div>
			</div>

			<Footer
				resetArray={resetArray}
				mergeSort={mergeSort}
				insertionSort={insertionSort}
				selectionSort={selectionSort}
				bubbleSort={bubbleSort}
				quickSort={quickSort}
			/>
		</>
	)
}

// random number function
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
