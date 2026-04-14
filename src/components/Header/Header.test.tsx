import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it } from "vitest"

import { Header } from "."

const setup = () => {
	const utils = render(<Header />)
	const searchInput = screen.getByLabelText("Search")
	return {
		searchInput,
		...utils,
	}
}

describe("Header", () => {
	it("should have search label", () => {
		const { searchInput } = setup()

		expect(searchInput).toBeInTheDocument()
	})

	it("should let the user search for a character name", () => {
		const { searchInput } = setup()

		fireEvent.change(searchInput, { target: { value: "Han Solo" } })

		expect(searchInput).toHaveValue("Han Solo")
	})
})
