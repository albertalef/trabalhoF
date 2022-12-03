import { keyframes, styled } from "@stitches/react";
import { FormEvent, useState } from "react";
import { BiLoader } from 'react-icons/bi';
import { useMutation } from "react-query";
import { useNavigate } from 'react-router-dom';
import AuthProvider from '../../../utils/AuthProvider';
import InputBar from './InputBar';



export default function LoginForm() {

	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [usernameError, setUsernameError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const { mutate: tryLogin, isLoading} = useMutation(() => AuthProvider.attemptLogin(username, password), {
		onSuccess: () => navigate('/tasks'),
		onError: () => setPasswordError('Wrong password')
	})

	async function attemptLogin(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!username) setUsernameError('This field cannot be empty!');
		if (!password) setPasswordError('This field cannot be empty!');
		if (username && password) tryLogin();
	}


	return (
		<Form onSubmit={attemptLogin}>
			<Title>Log in</Title>
			<InputHolder>
				<InputBar
					name='Username'
					type='text'
					value={username}
					error={usernameError}
					onChange={(e) => [setUsername(e.target.value), setUsernameError('')]}
				/>
				<InputBar
					name='Password'
					type='password'
					value={password}
					error={passwordError}
					onChange={(e) => [setPassword(e.target.value), setPasswordError('')]}
					canHide
				/>
			</InputHolder>
			<Button loading={isLoading} type='submit'>Confirm <BiLoader /></Button>
		</Form>
	)
}   



const Title = styled('h1', {
	color: '#1B1B1B',
	fontSize: 70,
	paddingBottom: 10,
	fontWeight: 800,
	textAlign: "left",
})
const Form = styled('form', {
	display: 'flex',
	flexDirection: 'column',
	background: '#FFFFFF',
	justifyContent: 'space-around',
	alignItems: 'center',
	width: 312,
	height: 340, 
})
const InputHolder = styled('div', {
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-around",
    height: 160,
	width: '100%',
})

const rotateAnimation = keyframes({
	'from':{
		transform: 'translate(0, -50%) rotate(0)'
	},
	'to': {
		transform: 'translate(0, -50%) rotate(360deg)'
	}
})

const Button = styled('button', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative',
	width: "100%",
	height: 50,
	color: '#FFFFFF',
	textAlign: 'center',
	background: '#1B1B1B',
	borderRadius: 5,
	border: 0,

	fontSize: 16,
	fontWeight: 700,
	letterSpacing: 0.2,
	
	'& svg':{
		visibility: 'hidden',
		position: "absolute",
		right: 22,
		top: '50%',
		transform: 'translate(0, -50%)',
	},

	'&:hover': {
		cursor: 'pointer',
		background: '#3F3F3F'
	},

	variants: {
		loading: {
			true: {
				'& svg':{
					visibility: "visible",
					animation: `${rotateAnimation} linear 2s infinite`
				},
			}
		}
	}
})

