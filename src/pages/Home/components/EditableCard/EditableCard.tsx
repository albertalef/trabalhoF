import { ChangeEventHandler, MouseEvent, MouseEventHandler, useState } from "react"
import IconButton from "../../../../components/IconButton"
import Task from "../../../../interfaces/Task"
import TaskService from "../../../../services/TaskService"
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
    task: Task
}


export default function EditableCard({ onTitleChange, onDescriptionChange, onClickCloseTab, task }: EditableCardProps) {
    const [title, setTitle] = useState(task.resume || "");
    const [description, setDescription] = useState(task.description || "");
    const [pastTitle, setPastTitle] = useState('');
    const [pastDescription, setPastDescription] = useState('');

    const [isEditable, setIsEditable] = useState(false);

    function startEdit() {
        setIsEditable(true);
        setPastTitle(title);
        setPastDescription(description);
    }

    function finishEdit() {
        setIsEditable(false);
    }

    function cancelEdit() {
        setIsEditable(false);
        setTitle(pastTitle);
        setDescription(pastDescription);
    }

    function deleteTask() {
        TaskService.deleteTask(task.id);
    }

    function handleCloseTab() {

    }
    return (
        <C.Container>
            <C.CardWrapper>
                <C.Content>
                    <C.Title
                        disabled={!isEditable}
                        editable={isEditable}
                        onChange={(e) => [setTitle(e.target.value), onTitleChange?.(e)]}
                        value={title}
                    ></C.Title>

                    <C.Description
                        disabled={!isEditable}
                        editable={isEditable}
                        onChange={(e) => [setDescription(e.target.value), onDescriptionChange?.(e)]}
                        value={description}
                    ></C.Description>
                </C.Content>
            </C.CardWrapper>
            <C.Options>
                <CloseButton onClick={(e) => [handleCloseTab(), onClickCloseTab?.(e)]} />
                {!isEditable ? (task.finishedAt ? <FinishButton /> : <UndoFinishButton />) : <ReturnButton onClick={cancelEdit} />}
                {!task.finishedAt ? (!isEditable ? <StartEditButton onClick={startEdit} /> : <FinishEditButton onClick={finishEdit} />) : <IconButton invisible={!!task.finishedAt} />}
                <DeleteButton onClick={deleteTask} />
            </C.Options>
        </C.Container>
    )

}
