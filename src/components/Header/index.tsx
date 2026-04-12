import { mdiMagnify } from "@lumx/icons"
import { FlexBox, TextField, Theme, Thumbnail } from "@lumx/react"
import React from "react"

import logo from "../../assets/logo.png"
import styles from "./Header.module.scss"

export const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<FlexBox className={styles.logo} hAlign="center" orientation="horizontal" vAlign="space-between">
				<Thumbnail alt="My Static App Logo" className={styles.logo} image={logo} />

				<TextField icon={mdiMagnify} label="Search" onChange={() => {}} theme={Theme.light} />
			</FlexBox>
		</header>
	)
}
