import { FlexBox, Message, SkeletonRectangle, Text } from "@lumx/react"
import React from "react"
import { useGetCharacters } from "../../../api/hooks/useGetCharacters"
import { CharacterList } from "../../Characters/CharacterList"
import { Pagination } from "../../ui/Pagination"

export const CharactersPage: React.FC = () => {
	const {
		characters,
		itemsPerPage,
		setItemsPerPage,
		disabledNext,
		disabledPrev,
		totalPages,
		page,
		setPage,
		isPendingCharacters,
		errorCharacters,
	} = useGetCharacters()

	const renderCharacterList = () => {
		if (isPendingCharacters)
			return (
				<FlexBox orientation="vertical" gap="medium">
					{Array.from({ length: itemsPerPage }, (_, i) => (
						<SkeletonRectangle key={i} variant="rounded" height="xxl" />
					))}
				</FlexBox>
			)
		if (errorCharacters)
			return (
				<Message kind="error" hasBackground>
					<Text as="p">
						Oups ! An error occured during the loading of your favorites characters, please try again or refresh the
						page
					</Text>
				</Message>
			)

		return (
			<>
				<h1>Characters list :</h1>
				<section>
					<CharacterList characters={characters} />

					<Pagination
						itemsPerPage={itemsPerPage}
						setItemsPerPage={setItemsPerPage}
						disabledNext={disabledNext}
						disabledPrev={disabledPrev}
						totalPages={totalPages}
						page={page}
						setPage={setPage}
					/>
				</section>
			</>
		)
	}

	return <main className="lumx-spacing-padding-huge">{renderCharacterList()}</main>
}
