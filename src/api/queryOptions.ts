import { queryOptions } from "@tanstack/react-query"
import { ApiPaginatedResponse, Character, Reaction } from "../types"
import { charactersQueryKeys, reactionsQueryKeys } from "./queryKeys"

export const getCharactersQueryOptions = queryOptions<ApiPaginatedResponse<Character>>({
	queryKey: charactersQueryKeys.all,
	queryFn: async () => {
		const response = await fetch("/api/characters")
		return await response.json()
	},
})

export const getReactionsQueryOptions = queryOptions<{ reactions: Reaction[] }>({
	queryKey: reactionsQueryKeys.all,
	queryFn: async () => {
		const response = await fetch("/api/reactions")
		return await response.json()
	},
})
