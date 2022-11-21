import { globalCss } from "@stitches/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Loading from "./pages/Loading";
import Login from "./pages/Login";


function App() {
	globalStyles();
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Routes>

		</BrowserRouter>
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
