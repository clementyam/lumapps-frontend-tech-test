import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Header } from "../Header"
import { CharactersPage } from "../pages/CharactersPage"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5, // 5 minutes
		},
	},
})

export const App: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<CharactersPage />} />
				</Routes>
			</Router>
		</QueryClientProvider>
	)
}
