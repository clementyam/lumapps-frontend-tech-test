import { GetCharactersParams } from "../types"

export const charactersQueryKeys = {
	all: (params?: GetCharactersParams) => ["characters", params] as const,
}

export const reactionsQueryKeys = {
	all: ["reactions"] as const,
}
