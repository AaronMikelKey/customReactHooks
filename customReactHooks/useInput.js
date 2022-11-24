// Uses the useState hook and some properties to set the state of a form input and return a basic HTML element
import { useState } from "react"

// These are the most common attributes I've used, can add more if needed
const useInput = ({ type, name, rows, placeholder, required}) => {
	const [value, setValue] = useState('')
	const input = <input 
		value={value} 
		type={type} 
		name={name}
		rows={rows}
		required={required}
		placeholder={placeholder}
		onChange={e => setValue(e.target.value)} />
		return [value, input]
}

export default useInput
