import { Button, FlexBox, List, ListItem, Select } from "@lumx/react"
import React, { Dispatch, SetStateAction, useState } from "react"
import styles from "./Pagination.module.scss"

const CHOICES = [4, 10, 20]

interface PaginationProps {
	itemsPerPage: number
	setItemsPerPage: Dispatch<SetStateAction<number>>
	disabledPrev: boolean
	disabledNext: boolean
	page: number
	setPage: Dispatch<SetStateAction<number>>
	totalPages?: number
}

export const Pagination: React.FC<PaginationProps> = ({
	itemsPerPage,
	setItemsPerPage,
	disabledNext,
	disabledPrev,
	page,
	setPage,
	totalPages,
}) => {
	const [isOpen, setOpen] = useState(false)
	const closeSelect = () => setOpen(false)
	const toggleSelect = () => setOpen(!isOpen)

	return (
		<FlexBox orientation="horizontal" vAlign="space-between" hAlign="bottom" className={styles.pagination}>
			<Select
				isOpen={isOpen}
				value={itemsPerPage.toString()}
				onInputClick={toggleSelect}
				onDropdownClose={closeSelect}
				label="Items per page"
			>
				<List>
					{CHOICES.map((choice, index) => (
						<ListItem
							isSelected={itemsPerPage === choice}
							key={`itemsPerPage-option-${index}`}
							onItemSelected={() => {
								setItemsPerPage(Number(choice))
								window.scrollTo(0, 0)
							}}
							size="tiny"
						>
							{choice}
						</ListItem>
					))}
				</List>
			</Select>
			<nav>
				<FlexBox as={"ul"} orientation="horizontal" gap="medium" hAlign="center">
					<li>
						<Button aria-label="go to first page" disabled={disabledPrev} onClick={() => setPage(1)}>
							{"<<"}
						</Button>
					</li>
					<li>
						<Button
							disabled={disabledPrev}
							onClick={() => setPage((prev) => prev - 1)}
							aria-label="go to previous page"
						>
							{"<"}
						</Button>
					</li>
					<li>
						<span aria-current="page">
							<b>{page}</b>
						</span>
					</li>
					<li>
						<Button disabled={disabledNext} onClick={() => setPage((prev) => prev + 1)} aria-label="go to next page">
							{">"}
						</Button>
					</li>
					<li>
						<Button
							aria-label="go to last page"
							disabled={disabledNext}
							onClick={() => totalPages && setPage(totalPages)}
						>
							{">>"}
						</Button>
					</li>
				</FlexBox>
			</nav>
		</FlexBox>
	)
}
