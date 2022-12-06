import IconButton from "../../components/IconButton"
import { styled } from "../../stitches.config"

export const TasksHolder = styled('section', {
	display: 'flex',
	flexWrap: "wrap",
	justifyContent: 'center',
	alignItems: "center",
	gap: '20px 70px',

	padding: "150px 0",

	width: '90%',

	'@sm': {
		gap: 10,
		padding: 0,
		paddingTop: '72px',
		flexDirection: "column",
		width: '100%',
	}
})



export const LogoutButton = styled(IconButton, {
	background: '#f4f4f4',

	boxShadow: "0px 3px 8px 0px #00000040",

	cursor: 'pointer',

	'&:hover': {
		outlineWidth: 0,
		background: '#ededed',
	},

	'&:active': {
		scale: 0.95,
	},

	'@sm': {
		boxShadow: "none",
		background: 'transparent',

	},
})

export const CreateButton = styled(IconButton, {
	background: '#f4f4f4',

	boxShadow: "0px 3px 8px 0px #00000040",

	cursor: 'pointer',



	'&:hover': {
		outlineWidth: 0,
		background: '#ededed',
	},

	'&:active': {
		scale: 0.95,
	},

	'@sm': {
		boxShadow: "none",
		background: 'transparent',
	},
})

export const Header = styled('header', {
	width: '100%',
	maxWidth: 1450,
	position: "fixed",
	zIndex: 2,
	margin: "46px 0",
	flexShrink: 0,
	borderRadius: 5,
	display: "flex",
	justifyContent: 'center',
	alignItems: 'center',
	gap: 20,

	'@sm': {

		borderRadius: 0,
		background: '#fdfdfd',
		width: '100%',
		margin: 0,
		padding: '5px 0px',

		borderBottom: '#EDEDED 1px solid'
	},
})



export const Section = styled('section', {
	position: "relative",

	width: '100%',
	maxWidth: '1450px',

	margin: '0 auto',

	display: 'flex',
	flexDirection: 'column',
	justifyContent: "flex-start",
	alignItems: 'center',



})

export const Page = styled('main', {
	position: 'relative',
	width: '100vw',
	height: '100vh',
	overflowX: "hidden",
	overflowY: 'scroll',

	'@sm': {
		height: '$$mobileHeight px',
	},

	'&::-webkit-scrollbar': {
		display: "none",
	},

})

export const EditableCardContainer = styled('div', {
	position: 'fixed',
	top: 0,
	left: 0,

	zIndex: 4,

	overflow: 'hidden',
	width: '100%',
	height: '100vh',

	backdropFilter: 'blur(5px)',

	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	'@sm': {
		height: '$$mobileHeight'
	}
})