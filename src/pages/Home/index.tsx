import { styled } from "@stitches/react";
import { AxiosError } from 'axios';
import { useEffect, useMemo, useState } from "react";
import { TiPlus } from "react-icons/ti";
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import IconButton from "../../components/IconButton";
import Task from "../../interfaces/Task";
import TaskService from "../../services/TaskService";
import Loading from "../Loading";
import Card from "./components/Card";
import EditableCard from "./components/EditableCard/EditableCard";
import SearchInput from "./components/SearchInput";

export default function Home() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [isFetching, setIsFetching] = useState(true);
	const [editing, setEditing] = useState<number | undefined>();
	const [searchInput, setSearchInput] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		setIsFetching(true);
		TaskService.listTasks()
			.then(tasks => setTasks(tasks))
			.then(() => setIsFetching(false))

			.catch(ex => {
				if (!(ex instanceof AxiosError<any, any>)) return;
				const status = ex.response?.status;
				if (status === 401 || status === 403) navigate('/login');
			})
	}, [])
	const filteredTasks = tasks.filter(task => task.resume?.toLowerCase().includes(searchInput.trim())
		|| task.description?.toLocaleLowerCase().includes(searchInput.trim()));

	const editingTask = useMemo(() => (tasks.find(task => task.id === editing)), [editing, tasks]);

    return (
		<>
			{isFetching ? <Loading /> : <Page>
				<Section>
					<Header>
						<SearchInput value={searchInput} onChange={e => setSearchInput(e.target.value)} />
						<CreateButton ><TiPlus /></CreateButton>
						<LogoutButton onClick={() => navigate('/login?logout')}><MdOutlineLogout /></LogoutButton>

					</Header>
					<TasksHolder>
						{(searchInput ? filteredTasks : tasks).map(task => <Card onClickEdit={() => setEditing(task.id)} key={task.id} {...task} />)}
					</TasksHolder>
					{!!editingTask &&
						<EditableCardContainer>
							<EditableCard {...editingTask} onClickCloseTab={() => setEditing(undefined)}></EditableCard>
						</EditableCardContainer>
					}
				</Section>
			</Page>}
		</>


	)
}

const TasksHolder = styled('section', {
	display: 'flex',
	flexWrap: "wrap",
	justifyContent: 'center',
	gap: '20px 70px',
	padding: "150px 0",
})

const LogoutButton = styled(IconButton, {
	position: "absolute",
	left: 'calc(100% + 90px)',
	background: '#f4f4f4',

	boxShadow: "0px 3px 8px 0px #00000040",

    cursor: 'pointer',

	'&:hover': {
		outlineWidth: 0,
		background: '#ededed',
	},

	'&:active': {
		scale: 0.95,
	}
})

const CreateButton = styled(IconButton, {
	position: "absolute",
	left: 'calc(100% + 20px)',
	background: '#f4f4f4',

	boxShadow: "0px 3px 8px 0px #00000040",

    cursor: 'pointer',


	'&:hover': {
		outlineWidth: 0,
		background: '#ededed',
	},

	'&:active': {
		scale: 0.95,
	}
})

const Header = styled('header', {
	width: '100%',
	maxWidth: 600,
	position: "fixed",
	zIndex: 2,
	margin: "46px 20px",
	flexShrink: 0,
	borderRadius: 5,
	display: "flex",
	justifyContent: 'center',
	alignItems: 'center',
	boxShadow: "0px 3px 8px 0px #00000040",

})



const Section = styled('section', {
	position: "relative",

	width: '100%',
	maxWidth: '1450px',

	margin: '0 auto',

	display: 'flex',
	flexDirection: 'column',
	justifyContent: "flex-start",
	alignItems: 'center',



})

const Page = styled('main', {
	width: '100vw',
	height: '100vh',
	overflowX: "hidden",
	background: '#FDFDFD',
	overflowY: 'scroll',

	'&::-webkit-scrollbar': {
		display: "none",
	}
})

const EditableCardContainer = styled('div', {
	position: 'fixed',

	zIndex: 4,

	width: '100vw',
	height: '100vh',

	backdropFilter: 'blur(5px)',

	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
})