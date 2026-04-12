import { FlexBox, List } from "@lumx/react"
import React from "react"
import { Reaction } from "../../types"
import { ReactionItem } from "../ReactionItem"

interface ReactionListProps {
	reactions: Reaction[]
}

export const ReactionList: React.FC<ReactionListProps> = ({ reactions }) => {
	return (
		<FlexBox orientation="horizontal" as={List} gap="medium">
			{reactions.map((reaction) => (
				<ReactionItem key={`reaction-${reaction.id}`} reaction={reaction} />
			))}
		</FlexBox>
	)
}
