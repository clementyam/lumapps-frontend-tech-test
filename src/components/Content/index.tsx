import { useQuery } from "@tanstack/react-query"
import React from "react"
import { getCharactersQueryOptions, getReactionsQueryOptions } from "../../api"

export const Content: React.FC = () => {
	const { data: characters } = useQuery(getCharactersQueryOptions)
	const { data: reactions } = useQuery(getReactionsQueryOptions)

	return <section className="lumx-spacing-padding-huge" />
}
