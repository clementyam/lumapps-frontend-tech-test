import { FlexBox, ListItem, Text } from "@lumx/react"
import React from "react"
import { CharacterWithReactions } from "../../../api/hooks/useGetCharacters"
import { Tag } from "../../ui/Tag"
import { ReactionList } from "../CharacterReactionList"
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
						<FlexBox className={styles.emptyImg} hAlign="center" vAlign="center">
							No image
						</FlexBox>
					)}
				</div>
				<FlexBox orientation="vertical" gap="medium" className={styles.informations}>
					<FlexBox orientation="horizontal" gap="medium" hAlign="center" wrap>
						<h2>{character.name}</h2>
						<FlexBox orientation="horizontal" gap="regular">
							{character.species && <Tag>{character.species}</Tag>}
							{character.birthYear && <Tag color="green">{character.birthYear}</Tag>}
						</FlexBox>
					</FlexBox>
					<Text as="p">{character.description}</Text>
					<FlexBox as={"ul"} orientation="horizontal" gap="medium" hAlign="center" wrap>
						{character.affiliations.map((aff, i) => (
							<li key={`aff-${i}`}>
								<Tag color="yellow">{aff}</Tag>
							</li>
						))}
					</FlexBox>

					<ReactionList reactions={character.reactions} />
				</FlexBox>
			</div>
		</ListItem>
	)
}
