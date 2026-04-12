import { FlexBox, List, ListItem } from "@lumx/react"
import React from "react"
import { useGetCharacters } from "../../api/hooks/useGetCharacters"

import styles from "./Content.module.scss"

export const Content: React.FC = () => {
	const { characters } = useGetCharacters()

	return (
		<section className="lumx-spacing-padding-huge">
			<List className={styles.list}>
				{characters?.map((character) => (
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
								<p>{character.description}</p>
							</FlexBox>
						</FlexBox>
					</ListItem>
				))}
			</List>
		</section>
	)
}
