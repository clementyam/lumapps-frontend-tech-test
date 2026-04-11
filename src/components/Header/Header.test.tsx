import { render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it } from "vitest"
import { Header } from "."

describe("Header", () => {
	it("should have search label", () => {
		render(<Header />)

		const searchLabel = screen.getByLabelText("Search")

		expect(searchLabel).toBeInTheDocument()
	})
})
