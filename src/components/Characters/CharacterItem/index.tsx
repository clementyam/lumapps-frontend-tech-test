import { FlexBox, ListItem, Text } from "@lumx/react"
import React from "react"

import { CharacterWithReactions } from "../../../types"
import { Tag } from "../../ui/Tag"
import { CharacterReactionList } from "../CharacterReactionList"
import styles from "./CharacterItem.module.scss"

interface CharacterItemProps {
	character: CharacterWithReactions
}

export const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
	return (
		<ListItem key={character.id} size="huge" className={styles.listItem}>
			<div className={styles.container}>
				<div className={styles.character}>
					{character.imageUrl ? (
						<img src={character.imageUrl} alt={character.name} />
					) : (
						<FlexBox aria-hidden="true" className={styles.emptyImg} hAlign="center" vAlign="center">
							No image
						</FlexBox>
					)}
				</div>
				<FlexBox orientation="vertical" gap="medium" className={styles.informations}>
					<FlexBox orientation="horizontal" gap="medium" hAlign="center" wrap>
						<h2>{character.name}</h2>
						<FlexBox orientation="horizontal" gap="regular">
							{character.species && <Tag>{character.species}</Tag>}
							{character.birthYear && <Tag variant="green">{character.birthYear}</Tag>}
						</FlexBox>
					</FlexBox>
					<Text as="p">{character.description}</Text>
					<FlexBox as={"ul"} orientation="horizontal" gap="medium" hAlign="center" wrap>
						{character.affiliations.map((aff, i) => (
							<li key={`aff-${i}`}>
								<Tag variant="yellow">{aff}</Tag>
							</li>
						))}
					</FlexBox>

					<CharacterReactionList reactions={character.reactions} />
				</FlexBox>
			</div>
		</ListItem>
	)
}
