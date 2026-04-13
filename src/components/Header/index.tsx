import { mdiMagnify } from "@lumx/icons"
import { FlexBox, TextField, Theme, Thumbnail } from "@lumx/react"
import React, { useEffect, useState } from "react"

import logo from "../../assets/logo.png"
import { useCharacterSearch } from "../../hooks/use-characters-search"
import useDebounce from "../../hooks/use-debounce"
import styles from "./Header.module.scss"

export const Header: React.FC = () => {
	const [input, setInput] = useState("")
	const debouncedValue = useDebounce(input)

	const [_, setCharacterSearch] = useCharacterSearch()

	useEffect(() => {
		setCharacterSearch(debouncedValue)
	}, [debouncedValue, setCharacterSearch])

	return (
		<header className={styles.header}>
			<FlexBox className={styles.logo} hAlign="center" orientation="horizontal" vAlign="space-between">
				<Thumbnail alt="My Static App Logo" className={styles.logo} image={logo} />

				<TextField icon={mdiMagnify} label="Search" onChange={setInput} theme={Theme.light} />
			</FlexBox>
		</header>
	)
}
