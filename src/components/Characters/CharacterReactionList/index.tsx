import { FlexBox, List } from "@lumx/react"
import React from "react"
import { Reaction } from "../../../types"
import { Tag } from "../../ui/Tag"

interface ReactionListProps {
	reactions: Reaction[]
}

export const ReactionList: React.FC<ReactionListProps> = ({ reactions }) => {
	return (
		<FlexBox orientation="horizontal" as={List} gap="medium" wrap>
			{reactions.map((reaction) => (
				<li key={`reaction-${reaction.id}`}>
					<Tag>{reaction.content}</Tag>
				</li>
			))}
		</FlexBox>
	)
}
