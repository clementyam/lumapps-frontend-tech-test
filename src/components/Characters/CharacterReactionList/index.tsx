import { FlexBox, List } from "@lumx/react"
import React from "react"
import { Reaction } from "../../../types"
import { Tag } from "../../ui/Tag"

interface CharacterReactionListProps {
	reactions: Reaction[]
}

export const CharacterReactionList: React.FC<CharacterReactionListProps> = ({ reactions }) => {
	return (
		<FlexBox orientation="horizontal" as={List} gap="medium" wrap>
			{reactions.map((reaction, i) => (
				<li key={`reaction-${reaction.id}-${i}`}>
					<Tag variant="reaction-blue">{reaction.content}</Tag>
				</li>
			))}
		</FlexBox>
	)
}
