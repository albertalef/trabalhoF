import { useEffect, useMemo, useState } from "react";
import { HiPlusSm } from "react-icons/hi";
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import IconButton from "../../components/IconButton";
import Task from "../../interfaces/Task";
import TaskService from "../../services/TaskService";
import { styled } from '../../stitches.config';
import Loading from "../Loading";
import Card from "./components/Card/Card";
import EditableCard from "./components/EditableCard/EditableCard";
import SearchInput from "./components/SearchInput/SearchInput";
import * as C from "./style";

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
				if (!ex.response?.ok) navigate('/login');
			})
	}, [])

	const filteredTasks = tasks.filter(task => task.resume?.toLowerCase().includes(searchInput.trim().toLocaleLowerCase())
		|| task.description?.toLocaleLowerCase().includes(searchInput.trim().toLocaleLowerCase()));

	const editingTask = useMemo(() => (tasks.find(task => task.id === editing)), [editing, tasks]);


	if (isFetching) return <Loading />;

	return (
		<C.Page>
			<C.Section>
				<C.Header>
					<SearchInput value={searchInput} onChange={e => setSearchInput(e.target.value)} />
					<C.CreateButton ><HiPlusSm /></C.CreateButton>
					<C.LogoutButton onClick={() => navigate('/login?logout')}><MdOutlineLogout /></C.LogoutButton>
				</C.Header>
				<C.TasksHolder>
					{(searchInput ? filteredTasks : tasks).map(task => <Card onClickEdit={() => setEditing(task.id)} key={task.id} task={task} />)}
				</C.TasksHolder> 
			</C.Section>
			{
				!!editingTask &&
				<C.EditableCardContainer>
					<EditableCard task={editingTask} onClickCloseTab={() => setEditing(undefined)}></EditableCard>
				</C.EditableCardContainer>
			}

		</C.Page>
	)
}
