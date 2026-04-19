import { useQuery } from "@tanstack/react-query"
import { useEffect, useMemo, useState } from "react"

import { useCharacterSearch } from "../../hooks/use-characters-search"
import { CharacterWithReactions, Reaction } from "../../types"
import { getCharactersQueryOptions, getReactionsQueryOptions } from "../queryOptions"

export const useGetCharacters = () => {
	const [characterSearch] = useCharacterSearch()

	const [page, setPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(4)

	const {
		data: dataCharacters,
		error: errorCharacters,
		isPending: isPendingCharacters,
	} = useQuery(
		getCharactersQueryOptions({ page: page.toString(), limit: itemsPerPage.toString(), name: characterSearch }),
	)

	const {
		data: dataReactions,
		error: errorReactions,
		isPending: isPendingReactions,
	} = useQuery(getReactionsQueryOptions)

	const sortedReactionsByCharacter = useMemo(() => {
		return dataReactions?.reactions.reduce<Record<number, Reaction[]>>((acc, curr) => {
			if (curr.deleted) return acc

			const updatedAcc = acc

			if (updatedAcc[curr.characterId]) {
				updatedAcc[curr.characterId] = updatedAcc[curr.characterId].concat(curr)
			} else {
				updatedAcc[curr.characterId] = [curr]
			}

			return updatedAcc
		}, {})
	}, [dataReactions?.reactions])

	// const charactersByName = useMemo(() => {
	// 	return dataCharacters?.results.filter((character) =>
	// 		character.name.toLowerCase().includes(characterSearch.trim().toLowerCase()),
	// 	)
	// }, [dataCharacters, characterSearch])

	// const totalPages = useMemo(() => {
	// 	return charactersByName && Math.ceil(charactersByName.length / itemsPerPage)
	// }, [charactersByName, itemsPerPage])

	// const charactersByPage = useMemo(() => {
	// 	return charactersByName?.slice((page - 1) * itemsPerPage, (page - 1) * itemsPerPage + itemsPerPage)
	// }, [charactersByName, page, itemsPerPage])

	const charactersWithReactions = useMemo(() => {
		return dataCharacters?.results.map((character) => ({
			...character,
			reactions: sortedReactionsByCharacter?.[character.id] || [],
		}))
	}, [dataCharacters, sortedReactionsByCharacter])

	useEffect(() => {
		setPage(1)
	}, [characterSearch])

	return {
		characters: charactersWithReactions as CharacterWithReactions[] | undefined,
		totalPages: dataCharacters && Math.ceil(dataCharacters.total / dataCharacters.limit),
		disabledPrev: !dataCharacters?.previous,
		disabledNext: !dataCharacters?.next,
		errorCharacters,
		isPendingCharacters,
		errorReactions,
		isPendingReactions,
		page,
		setPage,
		itemsPerPage,
		setItemsPerPage,
	}
}
