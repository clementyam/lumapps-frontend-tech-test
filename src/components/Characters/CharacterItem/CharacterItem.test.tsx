import { render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it } from "vitest"
import { CharacterItem } from "."

const characterMock = {
	id: 1,
	name: "Han Solo",
	species: "Human",
	birthYear: "29 BBY",
	description:
		"A charismatic and quick-witted smuggler, Han Solo is the legendary captain of the Millennium Falcon. Known for his daring maneuvers, sharp tongue, and unwavering loyalty to his friends, Han—alongside his Wookiee co-pilot Chewbacca—became a pivotal figure in the Rebellion, helping to topple the Empire and later supporting the Resistance.",
	imageUrl: "/images/han-solo.png",
	affiliations: ["Rebel Alliance", "Resistance", "Smugglers' Alliance"],
	reactions: [
		{ id: "102", content: "⭐", characterId: 1, deleted: false },
		{ id: "105", content: "�", characterId: 1, deleted: false },
	],
}

const setup = () => {
	const utils = render(<CharacterItem character={characterMock} />)

	return {
		...utils,
	}
}

describe("CharacterItem", () => {
	it("should have the name of the character", () => {
		setup()

		expect(screen.getByText("Han Solo")).toBeInTheDocument()
	})

	it("should have the species of the character", () => {
		setup()

		expect(screen.getByText("Human")).toBeInTheDocument()
	})

	it("should have the birthdate of the character", () => {
		setup()

		expect(screen.getByText("29 BBY")).toBeInTheDocument()
	})

	it("should have the description of the character", () => {
		setup()

		const description = characterMock.description

		expect(screen.getByText(description)).toBeInTheDocument()
	})

	it("should have the affiliations of the character", () => {
		setup()

		expect(screen.getByText("Rebel Alliance")).toBeInTheDocument()
		expect(screen.getByText("Resistance")).toBeInTheDocument()
		expect(screen.getByText("Smugglers' Alliance")).toBeInTheDocument()
	})

	it("should have the reactions of the character", () => {
		setup()

		expect(screen.getByText("⭐")).toBeInTheDocument()
		expect(screen.getByText("�")).toBeInTheDocument()
	})
})
