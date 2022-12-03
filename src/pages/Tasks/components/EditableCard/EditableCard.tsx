import { ChangeEventHandler, MouseEventHandler, useState } from "react"
import IconButton from "../../../../components/IconButton"
import Task from "../../../../interfaces/Task"
import useTaskController from "../../../../services/TaskController"
import CloseButton from "./components/CloseButton"
import DeleteButton from "./components/DeleteButton"
import FinishButton from "./components/FinishButton"
import FinishEditButton from "./components/FinishEditButton"
import ReturnButton from "./components/ReturnButton"
import StartEditButton from "./components/StartEditButton"
import UndoFinishButton from "./components/UndoFinishButton"
import * as C from "./EditableCard.style"


interface EditableCardProps {
    onTitleChange?: ChangeEventHandler<HTMLTextAreaElement>,
    onDescriptionChange?: ChangeEventHandler<HTMLTextAreaElement>,
    onClickCloseTab?: MouseEventHandler<HTMLButtonElement>,
    onFinishCreate?: MouseEventHandler<HTMLButtonElement>,
    creating?: boolean,
    task: Task
}


export default function EditableCard({ onTitleChange, onDescriptionChange, onClickCloseTab, creating, task }: EditableCardProps) {
    const [title, setTitle] = useState(task.resume || "");
    const [description, setDescription] = useState(task.description || "");
    const [pastTitle, setPastTitle] = useState('');
    const [pastDescription, setPastDescription] = useState('');

    const [isEditable, setIsEditable] = useState(false);

    const { fetchDelete, fetchEdit, fetchFinish, fetchUndoFinish, fetchCreate } = useTaskController();

    function startEdit() {
        setIsEditable(true);
        setPastTitle(title);
        setPastDescription(description);
    }

    function finishEdit() {
        setIsEditable(false);
        fetchEdit({ ...task, resume: title, description });
    }

    function cancelEdit() {
        setIsEditable(false);
        setTitle(pastTitle);
        setDescription(pastDescription);
    }

    function deleteTask() {
        fetchDelete(task.id);
    }

    function createTask(){
        fetchCreate({
            id: -1,
            resume: title,
            description: description,
        })
    }
    return (
        <C.Container>
            <C.CardWrapper>
                <C.Content>
                    <C.Title
                        disabled={!(isEditable || creating)}
                        editable={isEditable || creating}
                        onChange={(e) => [setTitle(e.target.value), onTitleChange?.(e)]}
                        value={title}
                    ></C.Title>

                    <C.Description
                        disabled={!(isEditable || creating)}
                        editable={isEditable || creating}
                        onChange={(e) => [setDescription(e.target.value), onDescriptionChange?.(e)]}
                        value={description}
                    ></C.Description>
                </C.Content>
            </C.CardWrapper>
            {
                !creating? 
                (<C.Options>
                    <CloseButton onClick={(e) => onClickCloseTab?.(e)} />
                    {!isEditable ? (!task.finishedAt ? <FinishButton onClick={() => fetchFinish(task.id)} /> : <UndoFinishButton onClick={() => fetchUndoFinish(task.id)} />) : <ReturnButton onClick={cancelEdit} />}
                    {!task.finishedAt ? (!isEditable ? <StartEditButton onClick={startEdit} /> : <FinishEditButton onClick={finishEdit} />) : <IconButton invisible={!!task.finishedAt} />}
                    <DeleteButton onClick={deleteTask} />
                </C.Options>)
                :
                (<C.Options>
                    <ReturnButton onClick={onClickCloseTab}/>
                    <FinishEditButton onClick={(e) => [createTask(), onClickCloseTab?.(e)]}/>
                </C.Options>)
            }
            
        </C.Container>
    )

}
