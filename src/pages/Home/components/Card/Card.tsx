import { MouseEventHandler, useMemo } from "react";
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { TiArrowBackOutline } from 'react-icons/ti';
import Task from "../../../../interfaces/Task";
import TaskService from "../../../../services/TaskService";
import * as C from "./Card.style";



const dateFormatOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "numeric",
    year: "2-digit"
}

interface SelectProps {
    onClickEdit?: MouseEventHandler<HTMLButtonElement>,
    task: Task,
}

export default function Card({ task, onClickEdit }: SelectProps) {
    const date = useMemo(() => new Date(task.createdAt || "").toLocaleDateString('pt-BR', dateFormatOptions), [task.createdAt]);

    function handleDeleteTask() {
        TaskService.deleteTask(task.id);
    }

    return (
        <C.Container>
            <C.CardWrapper finished={!!task.finishedAt}>
                <C.FinishedIcon finished={!!task.finishedAt} />
                <C.DateField>{date}</C.DateField>
                <C.Title>{task.resume}</C.Title>
                <C.Description>{task.description}</C.Description>
            </C.CardWrapper>
            <C.Options tabIndex={-1}>
                <C.Button tabIndex={-1} >{task.finishedAt ? <TiArrowBackOutline /> : <AiOutlineCheck />}</C.Button>
                <C.Button tabIndex={-1} onClick={onClickEdit} hidden={!!task.finishedAt}><AiOutlineEdit /></C.Button>
                <C.Button tabIndex={-1} onClick={handleDeleteTask}><AiOutlineDelete /></C.Button>
            </C.Options>
        </C.Container>
    )
}


