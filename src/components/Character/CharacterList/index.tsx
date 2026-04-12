import { List } from "@lumx/react"
import React from "react"
import { CharacterWithReactions } from "../../../api/hooks/useGetCharacters"
import { CharacterItem } from "../CharacterItem"

interface CharacterListProps {
	characters: CharacterWithReactions[] | undefined
}

export const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
	return (
		<List>
			{characters?.length ? (
				characters?.map((character) => <CharacterItem key={character.id} character={character} />)
			) : (
				<div>Oups ! No results</div>
			)}
		</List>
	)
}
