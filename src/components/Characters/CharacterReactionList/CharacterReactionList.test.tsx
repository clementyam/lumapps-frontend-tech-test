import { render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { useGetCharacters } from "../../../api/hooks/useGetCharacters"
import { CharacterReactionList } from "."

vi.mock("../../../api/hooks/useGetCharacters", () => ({
	useGetCharacters: vi.fn(),
}))

const reactionsMock = [
	{ id: "102", content: "⭐", characterId: 1, deleted: false },
	{ id: "105", content: "�", characterId: 1, deleted: false },
]

const setup = () => {
	const utils = render(<CharacterReactionList reactions={reactionsMock} />)

	return utils
}

describe("CharacterReactionList", () => {
	it("should have the reactions of the character", () => {
		const useGetCharactersMock = vi.mocked(useGetCharacters)

		useGetCharactersMock.mockReturnValue({
			isPendingReactions: false,
			errorReactions: null,
		} as ReturnType<typeof useGetCharacters>)

		setup()

		expect(screen.getByText("⭐")).toBeInTheDocument()
		expect(screen.getByText("�")).toBeInTheDocument()
	})

	it("should display an error if query fails", () => {
		const useGetCharactersMock = vi.mocked(useGetCharacters)

		useGetCharactersMock.mockReturnValue({
			isPendingReactions: false,
			errorReactions: { message: "Error" },
		} as ReturnType<typeof useGetCharacters>)

		setup()

		expect(
			screen.getByText("Oups ! An error occured during the loading of your characters reactions."),
		).toBeInTheDocument()
	})
})
