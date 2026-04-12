import { FlexBox, ListItem, Text } from "@lumx/react"
import React from "react"
import { CharacterWithReactions } from "../../api/hooks/useGetCharacters"
import styles from "./CharacterItem.module.scss"

interface CharacterItemProps {
	character: CharacterWithReactions
}

export const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
	return (
		<ListItem key={character.id} size="huge" className={styles.listItem}>
			<FlexBox orientation="horizontal" gap="medium">
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
					<h1>{character.name}</h1>
					<Text as="p">{character.description}</Text>
				</FlexBox>
			</FlexBox>
		</ListItem>
	)
}
