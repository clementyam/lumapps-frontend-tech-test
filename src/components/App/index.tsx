import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Content } from "../Content"
import { Header } from "../Header"

const queryClient = new QueryClient()

export const App: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Content />} />
				</Routes>
			</Router>
		</QueryClientProvider>
	)
}
