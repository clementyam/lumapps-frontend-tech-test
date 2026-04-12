export interface Character {
	id: number
	name: string
	species?: string
	birthYear?: string
	description?: string
	imageUrl?: string
	affiliations: string[]
}

export interface Reaction {
	id: string
	content: string
	characterId: number
	deleted: boolean
}

export interface ApiPaginatedResponse<T> {
	results: T[]
	total: number
	page: number
	limit: number
	next: number | null
	previous: number | null
}
