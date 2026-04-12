import { useQuery } from "@tanstack/react-query"
import { useMemo, useState } from "react"

import { Reaction } from "../../types"
import { getCharactersQueryOptions, getReactionsQueryOptions } from "../queryOptions"

interface UseGetCharactersParams {
	name: string
}

export const useGetCharacters = ({ name }: UseGetCharactersParams) => {
	const [page, setPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(4)

	const {
		data: dataCharacters,
		error: errorCharacters,
		isPending: isPendingCharacters,
	} = useQuery(getCharactersQueryOptions)

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

	const charactersByName = useMemo(() => {
		return dataCharacters?.results.filter((character) => character.name.toLowerCase().includes(name.toLowerCase()))
	}, [dataCharacters, name])

	const totalPages = useMemo(() => {
		return charactersByName && Math.ceil(charactersByName.length / itemsPerPage)
	}, [charactersByName, itemsPerPage])

	const charactersByPage = useMemo(() => {
		return charactersByName?.slice((page - 1) * itemsPerPage, (page - 1) * itemsPerPage + itemsPerPage)
	}, [charactersByName, page, itemsPerPage])

	const charactersWithReactions = useMemo(() => {
		return charactersByPage?.map((character) => ({
			...character,
			reactions: sortedReactionsByCharacter?.[character.id] || [],
		}))
	}, [charactersByPage, sortedReactionsByCharacter])

	return {
		characters: charactersWithReactions,
		totalPages,
		disabledPrev: page === 1,
		disabledNext: page === totalPages,
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
