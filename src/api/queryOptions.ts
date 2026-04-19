import { queryOptions } from "@tanstack/react-query"
import { ApiPaginatedResponse, Character, GetCharactersParams, Reaction } from "../types"
import { charactersQueryKeys, reactionsQueryKeys } from "./queryKeys"

export const getCharactersQueryOptions = ({ page, limit, name }: GetCharactersParams) =>
	queryOptions<ApiPaginatedResponse<Character>>({
		queryKey: charactersQueryKeys.all({ page, limit, name }),
		queryFn: async () => {
			const response = await fetch(
				"/api/characters?" +
					new URLSearchParams({
						page,
						limit,
						...(name && { name }),
					}),
			)
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
