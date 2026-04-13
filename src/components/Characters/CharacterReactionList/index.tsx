import { FlexBox, List, Message, SkeletonRectangle, Text } from "@lumx/react"
import React from "react"
import { useGetCharacters } from "../../../api/hooks/useGetCharacters"
import { Reaction } from "../../../types"
import { Tag } from "../../ui/Tag"

interface CharacterReactionListProps {
	reactions: Reaction[]
}

export const CharacterReactionList: React.FC<CharacterReactionListProps> = ({ reactions }) => {
	const { isPendingReactions, errorReactions } = useGetCharacters()

	if (errorReactions)
		return (
			<Message kind="error" hasBackground>
				<Text as="p">Oups ! An error occured during the loading of your characters reactions.</Text>
			</Message>
		)

	if (isPendingReactions) return <SkeletonRectangle aria-busy="true" variant="rounded" height="m" width="xxl" />

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
