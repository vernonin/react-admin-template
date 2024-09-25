import { useState } from 'react'

export default function useParentRoute (initState = '') {
	const route = initState
	const reg = /\/(\w+)$/
	let parent = route.replace(reg, '')

	const [state, setState] = useState(parent)
	const setRoute = () => setState(initState)

	return [state, setRoute]
}