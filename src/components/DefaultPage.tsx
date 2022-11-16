import { styled } from "../stitches.config";

const DefaultPage = styled('main', {
	width: '100vw',
	height: '100vh',
    
	overflowX: "hidden",
	background: '#FDFDFD',
	overflowY: 'scroll',

	'&::-webkit-scrollbar': {
		display: "none",
	}
})

export default DefaultPage;