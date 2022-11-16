import { ChangeEventHandler, MouseEvent, MouseEventHandler, useState } from "react"
import IconButton from "../../../../components/IconButton"
import Task from "../../../../interfaces/Task"
import TaskService from "../../../../services/TaskService"
import { styled } from "../../../../stitches.config"
import CloseButton from "./components/CloseButton"
import DeleteButton from "./components/DeleteButton"
import FinishButton from "./components/FinishButton"
import FinishEditButton from "./components/FinishEditButton"
import ReturnButton from "./components/ReturnButton"
import StartEditButton from "./components/StartEditButton"
import UndoFinishButton from "./components/UndoFinishButton"


interface EditableCardProps extends Task{
    onTitleChange?: ChangeEventHandler<HTMLTextAreaElement>,
    onDescriptionChange?: ChangeEventHandler<HTMLTextAreaElement>,
    onClickCloseTab?: MouseEventHandler<HTMLButtonElement>
}


export default function EditableCard({ onTitleChange, onDescriptionChange, onClickCloseTab, ...task }:EditableCardProps) {

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

    function handleCloseTab(){
        
    }
    return (
        <Container>
            <CardWrapper>
                <Content>
                    <Title
                        disabled={!isEditable}
                        editable={isEditable}
                        onChange={(e) => [setTitle(e.target.value), onTitleChange?.(e)]}
                        value={title}
                    ></Title>

                    <Description
                        disabled={!isEditable}
                        editable={isEditable}
                        onChange={(e) => [setDescription(e.target.value), onDescriptionChange?.(e)]}
                        value={description}
                    ></Description>
                </Content>
            </CardWrapper>
            <Options>
                <CloseButton onClick={(e) => [handleCloseTab(), onClickCloseTab?.(e)]} />
                {!isEditable ? (task.finishedAt ? <FinishButton /> : <UndoFinishButton />) : <ReturnButton onClick={cancelEdit} />}
                {!task.finishedAt ? (!isEditable ? <StartEditButton onClick={startEdit} /> : <FinishEditButton onClick={finishEdit} />) : <IconButton invisible={!!task.finishedAt} />}
                <DeleteButton onClick={deleteTask} />
            </Options>
        </Container>
    )

}

const Title = styled('textarea', {
    color: '#3F3F3F',
    fontSize: 30,
    fontWeight: 700,
    textAlign: 'left',

    padding: '5px 10px',
    height: 90,

    background: 'transparent',

    outlineWidth: 0,
    border: 0,
    borderRadius: 5,
    "&::-webkit-scrollbar": {
        display: "none",
    },
    resize: 'none',

    variants: {
        editable: {
            true: {
                color: "#6f6f6f",
                outlineColor: "#D0D0D0",
                outlineWidth: 3,
                outlineStyle: "solid",
                '&:hover': {
                    outlineColor: "#C0C0C0",
                }
            }
        }
    }
})


const Description = styled('textarea', {
    color: "#6f6f6f",

    display: "block",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 1.2,
    textAlign: "left",

    overflowY: 'scroll',
    height: '100%',
    padding: '5px 10px',

    resize: 'none',


    background: 'transparent',

    border: 0,
    borderRadius: 5,

    outlineWidth: 0,


    "&::-webkit-scrollbar": {
        display: "none",
    },

    variants: {
        editable: {
            true: {
                outlineColor: "#D0D0D0",
                outlineWidth: 3,
                outlineStyle: "solid",
                '&:hover': {
                    outlineColor: "#C0C0C0",
                }
            }
        }
    }
})

const Content = styled('div', {
    width: '85%',
    height: '80%',


    display: 'flex',
    flexDirection: 'column',

    gap: 20
})

const Container = styled('div', {
    position: "relative",
    width: '100%',
    maxWidth: 800,

    marginBottom: 110
})

const CardWrapper = styled('div', {
    width: '100%',
    height: 600,

    background: '#F4F4F4',
    borderRadius: 15,

    boxShadow: "0px 3px 15px 2px #00000040",
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
})



const Options = styled('div', {
    width: '100%',
    height: 110,
    paddingTop: 30,

    background: "#D0D0D0",

    position: 'absolute',

    borderRadius: 15,


    bottom: -110,
    zIndex: -1,

    display: "flex",
    justifyContent: 'space-around',
    alignItems: 'center',

    gap: '5%',

})

