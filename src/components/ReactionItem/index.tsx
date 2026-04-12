import React from "react"
import { Reaction } from "../../types"

import styles from "./ReactionItem.module.scss"

interface ReactionItemProps {
	reaction: Reaction
}

export const ReactionItem: React.FC<ReactionItemProps> = ({ reaction }) => {
	return <li className={styles.reaction}>{reaction.content}</li>
}
