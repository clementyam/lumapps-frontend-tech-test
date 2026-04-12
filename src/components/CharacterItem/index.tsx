import { FlexBox, ListItem, Text } from "@lumx/react"
import React from "react"
import { CharacterWithReactions } from "../../api/hooks/useGetCharacters"
import { ReactionList } from "../CharacterReactionList"
import styles from "./CharacterItem.module.scss"

interface CharacterItemProps {
	character: CharacterWithReactions
}

export const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
	return (
		<ListItem key={character.id} size="huge" className={styles.listItem}>
			<div className={styles.informations}>
				<div className={styles.character}>
					{character.imageUrl ? (
						<img src={character.imageUrl} alt={character.name} />
					) : (
						<FlexBox className={styles.emptyImg} hAlign="center" vAlign="center">
							No image
						</FlexBox>
					)}
				</div>
				<FlexBox orientation="vertical" gap="medium">
					<h2>{character.name}</h2>
					<Text as="p">{character.description}</Text>
					<ReactionList reactions={character.reactions} />
				</FlexBox>
			</div>
		</ListItem>
	)
}
