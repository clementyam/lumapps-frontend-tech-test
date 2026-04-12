import { atom, useAtom } from "jotai"

const characterSearchAtom = atom("")

export const useCharacterSearch = () => {
	return useAtom(characterSearchAtom)
}
