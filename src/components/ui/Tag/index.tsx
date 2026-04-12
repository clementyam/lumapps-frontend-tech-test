import React, { PropsWithChildren } from "react"

import styles from "./Tag.module.scss"

interface TagProps extends PropsWithChildren {
	color?: "blue" | "yellow" | "green"
}

export const Tag: React.FC<TagProps> = ({ children, color = "blue" }) => {
	return <span className={`${styles.tag} ${styles[color]}`}>{children}</span>
}
