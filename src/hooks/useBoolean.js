import { useState } from 'react'

// 自定义 hook
export default function useBoolean (initState = false) {
	const [state, setState] = useState(initState)

	const handleTrue = _ => setState(true)
	const handleFalse = _ => setState(false)
	const handleToggle = _ => setState(!state)

	return [state, { handleTrue, handleFalse, handleToggle }]
}