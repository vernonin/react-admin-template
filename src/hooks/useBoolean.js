import { useState } from 'react'

// 自定义 hook
export default function useBoolean(initState) {
	const [state, setState] = useState(initState || false)
	const setTrue = _ => setState(true)
	const setFalse = _ => setState(false)
	const toggle = () => setState(!state)

	return [state, { setTrue, setFalse, toggle }]
}