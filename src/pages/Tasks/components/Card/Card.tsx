import { MouseEventHandler, useMemo } from "react";
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { TiArrowBackOutline } from 'react-icons/ti';
import { useMutation, useQueryClient } from "react-query";
import Task from "../../../../interfaces/Task";
import useTaskController from "../../../../services/TaskController";
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
    disable?: boolean,
}

export default function Card({ task, onClickEdit, disable }: SelectProps) {

    const {fetchDelete, fetchFinish, fetchUndoFinish} = useTaskController();
    const date = useMemo(() => new Date(task.createdAt || "").toLocaleDateString('pt-BR', dateFormatOptions), [task.createdAt]);
   
    return (
        <C.Container>
            <C.CardWrapper finished={!!task.finishedAt}>
                <C.FinishedIcon finished={!!task.finishedAt} />
                <C.DateField>{date}</C.DateField>
                <C.Title>{task.resume}</C.Title>
                <C.Description>{task.description}</C.Description>
            </C.CardWrapper>
            <C.Options tabIndex={-1}>
                {task.finishedAt ?
                    <C.Button tabIndex={-1} onClick={() => {if(!disable) fetchUndoFinish(task.id)}}><TiArrowBackOutline /></C.Button> :
                    <C.Button tabIndex={-1} onClick={() => {if(!disable) fetchFinish(task.id)}}><AiOutlineCheck /></C.Button>
                }
                <C.Button tabIndex={-1} onClick={(e) => {if(!disable) onClickEdit?.(e)}} ><AiOutlineEdit /></C.Button>
                <C.Button tabIndex={-1} onClick={() => {if(!disable) fetchDelete(task.id)}}><AiOutlineDelete /></C.Button>
            </C.Options>
        </C.Container>
    )
}


