import { globalCss } from "@stitches/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import Home from "./pages/Home";

const queryClient = new QueryClient();

function App() {
	globalStyles();
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient} >
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/tasks" element={<Tasks/>} />
				</Routes>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</BrowserRouter >
	)
}

const globalStyles = globalCss({
	'*': {
		textDecorationColor: '#A5A5A5',
		fontFamily: "Inter",
		margin: 0,
		padding: 0,
	},
	'*::selection': {
		color: 'white',
		background: '#A5A5A5'
	}
})
export default App
