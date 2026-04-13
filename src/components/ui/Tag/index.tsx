import React, { PropsWithChildren } from "react"

import styles from "./Tag.module.scss"

interface TagProps extends PropsWithChildren {
	variant?: "blue" | "yellow" | "green" | "reaction-blue"
}

export const Tag: React.FC<TagProps> = ({ children, variant = "blue" }) => {
	return <span className={`${styles.tag} ${styles[variant]}`}>{children}</span>
}
