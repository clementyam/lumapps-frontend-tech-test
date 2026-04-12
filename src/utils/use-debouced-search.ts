import type { ChangeEvent, KeyboardEvent } from "react"
import { useEffect, useState } from "react"
import useDebounce from "./use-debounce"

export default function useDebouncedSearch(delay = 500) {
	const [input, setInput] = useState("")
	const [search, setSearch] = useState("")
	const debouncedInput = useDebounce(input, delay)

	useEffect(() => {
		setSearch(debouncedInput)
	}, [debouncedInput])

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value)
	}

	const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			setSearch(input)
		}
	}

	const clear = () => {
		setInput("")
		setSearch("")
	}

	return { clear, input, onChange, onKeyDown, search }
}
