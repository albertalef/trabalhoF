import { useEffect, useMemo, useState } from "react";
import { HiPlusSm } from "react-icons/hi";
import { MdOutlineLogout } from "react-icons/md";
import { useQuery } from "react-query";
import { Navigate, useNavigate } from "react-router-dom";
import IconButton from "../../components/IconButton";
import useWindowDimensions from "../../hooks/UseWindowDimensions";
import Task from "../../interfaces/Task";
import TaskService from "../../services/TaskService";
import { styled } from '../../stitches.config';
import Loading from "../Loading";
import Card from "./components/Card/Card";
import EditableCard from "./components/EditableCard/EditableCard";
import SearchInput from "./components/SearchInput/SearchInput";
import * as C from "./style";

export default function Tasks() {
	
	const {data: tasks, isLoading, isError, isIdle} = useQuery<Task[]>('tasks', TaskService.listTasks);

	const {height} = useWindowDimensions();
	
	const navigate = useNavigate();

	const [isCreating, setIsCreating] = useState(false);
	const [isEditing, setIsEditing] = useState<number | undefined>();
	const [searchInput, setSearchInput] = useState('');

	const editingTask = useMemo(() => tasks?.find(task => task.id === isEditing), [isEditing, tasks]);

	if(isError) return <Navigate to={"/login"}></Navigate>;
	if (isLoading || isIdle) return <Loading />;


	const filteredTasks = tasks.filter(task => task.resume?.toLowerCase().includes(searchInput.trim().toLocaleLowerCase())
		|| task.description?.toLocaleLowerCase().includes(searchInput.trim().toLocaleLowerCase()));


	return (
		<C.Page css={{$$mobileHeight: height + 'px'}}>
			<C.Section>
				<C.Header>
					<SearchInput value={searchInput} onChange={e => setSearchInput(e.target.value)} />
					<C.CreateButton onClick={() => setIsCreating(true)}><HiPlusSm /></C.CreateButton>
					<C.LogoutButton onClick={() => navigate('/login?logout')}><MdOutlineLogout /></C.LogoutButton>
				</C.Header>
				<C.TasksHolder>
					{(searchInput ? filteredTasks : tasks).map(task => <Card onClickEdit={() => setIsEditing(task.id)} key={task.id} task={task} />)}
				</C.TasksHolder> 
			</C.Section>
			{
				!!editingTask &&
				<C.EditableCardContainer css={{$$mobileHeight: height + 'px'}}>
					<EditableCard task={editingTask} onClickCloseTab={() => setIsEditing(undefined)}></EditableCard>
				</C.EditableCardContainer>
			}
			{
				isCreating && !editingTask &&
				<C.EditableCardContainer css={{$$mobileHeight: height + 'px'}}>
					<EditableCard task={{id: -1}} onClickCloseTab={() => setIsCreating(false)} creating></EditableCard>
				</C.EditableCardContainer>
			}
		</C.Page>
	)
}
