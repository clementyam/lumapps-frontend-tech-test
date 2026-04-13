import { render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { CharacterWithReactions, useGetCharacters } from "../../../api/hooks/useGetCharacters"
import { CharacterList } from "."

vi.mock("../../../api/hooks/useGetCharacters", () => ({
	useGetCharacters: vi.fn(),
}))

const charactersMock = [
	{
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
	},
	{
		id: 2,
		name: "Count Dooku",
		species: "Human",
		birthYear: "102 BBY",
		description:
			"Once a respected Jedi Master, Count Dooku fell to the dark side and assumed the title of Darth Tyranus. As a cunning strategist and master duelist, he led the Confederacy of Independent Systems during the Clone Wars, orchestrating galactic conflict while serving as a key agent of the Sith.",
		affiliations: ["Confederacy of Independent Systems", "Sith", "Jedi Order (formerly)"],
		reactions: [
			{ id: "201", content: "�", characterId: 2, deleted: false },
			{ id: "202", content: "🤖", characterId: 2, deleted: false },
			{ id: "203", content: "❓", characterId: 2, deleted: false },
		],
	},
]

const setup = (characters?: CharacterWithReactions[]) => {
	const useGetCharactersMock = vi.mocked(useGetCharacters)

	useGetCharactersMock.mockReturnValue({
		isPendingReactions: false,
		errorReactions: null,
	} as ReturnType<typeof useGetCharacters>)

	const utils = render(<CharacterList characters={characters} />)

	return {
		...utils,
	}
}

describe("CharacterList", () => {
	it("should display a list of characters", () => {
		setup(charactersMock)

		expect(screen.getByText("Han Solo")).toBeInTheDocument()
		expect(screen.getByText("Count Dooku")).toBeInTheDocument()
	})

	it("should display a message if has no characters", () => {
		setup()

		expect(screen.getByText("Oups ! No results")).toBeInTheDocument()
	})
})
