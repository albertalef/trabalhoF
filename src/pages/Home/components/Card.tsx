import { MouseEventHandler, useMemo } from "react";
import { AiOutlineCheck, AiOutlineCheckCircle, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { TiArrowBackOutline } from 'react-icons/ti';
import IconButton from "../../../components/IconButton";
import Task from "../../../interfaces/Task";
import TaskService from "../../../services/TaskService";
import { styled } from "../../../stitches.config";



const dateFormatOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "numeric",
    year: "2-digit"
}

interface SelectProps {
    onClickEdit?: MouseEventHandler<HTMLButtonElement>,
}

export default function Card({ id, resume, description, createdAt, finishedAt, onClickEdit }: Task & SelectProps) {
    const date = useMemo(() => new Date(createdAt || "").toLocaleDateString('pt-BR', dateFormatOptions), [createdAt]);

    function handleDeleteTask(){
        TaskService.deleteTask(id);
    }

    return (
        <Container>
            <CardWrapper finished={!!finishedAt}>
                <FinishedIcon finished={!!finishedAt}/>
                <DateField>{date}</DateField>
                <Title>{resume}</Title>
                <Description>{description}</Description>
            </CardWrapper>
            <Options tabIndex={-1}>
                <Button tabIndex={-1} >{finishedAt ? <TiArrowBackOutline/> : <AiOutlineCheck/>}</Button>
                <Button tabIndex={-1} onClick={onClickEdit}><AiOutlineEdit/></Button>
                <Button tabIndex={-1} onClick={handleDeleteTask}><AiOutlineDelete/></Button>
            </Options>
        </Container>
    )
}




const FinishedIcon = styled(AiOutlineCheckCircle, {
    color: '#AFAFAF',
    fontSize: 20,
    fontWeight: 500,

    position: 'absolute',
    top: 15,
    right: 15,

    variants: {
        finished: {
            false: {
                display: 'none',
            }
        }
    }
})


const DateField = styled('p', {
    color: '#AfAfAf',
    fontSize: "11px",
    fontWeight: "500",
    textAlign: "right",
    verticalAlign: 'bottom',


})


const Title = styled('h1', {
    color: '#3F3F3F',
    fontSize: 21,
    fontWeight: 700,
    textAlign: 'left',

    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
})


const Description = styled('p', {
    color: "#6f6f6f",

    fontSize: "15px",
    fontWeight: "500",
    lineHeight: 1.2,
    textAlign: "left",

    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",

    width: "100%",
    height: 92,
})

const Button = styled(IconButton, {

    width: 35,
    height: 35,


    transition: 'width 0.5s ease-in-out',

    '& svg': {
        fontSize: 17,
    },

})


const Options = styled('section', {
    transition: 'left 80ms',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    borderRadius: '0px 15px 15px 0px',
    paddingLeft: '6%',
    width: "15%",
    height: "100%",

    zIndex: -1,

    position: "absolute",
    bottom: "0",
    left: "79%",

    background: "#D0D0D0",

})

const CardWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-between",

    position: 'relative',


    background: '#F4F4F4',
    padding: '20px 50px',
    paddingBottom: 30,
    borderRadius: 15,


    letterSpacing: 0.2,

    width: 288,
    height: 145,

    transition: 'background 80ms',
	boxShadow: "0px 0px 8px 0px #00000030",

    variants: {
        finished: {
            true: {
                outline: "5px #DfDfDf solid",
            }
        }
    }
})

const Container = styled('section', {
    display: 'inline-block',
    position: 'relative',
    zIndex: 0,
    transition: 'transform ease 250ms',

    
    '&:hover': {
        // transform: 'scale(101%)',
        zIndex: 1,
    },



    [`&:hover ${CardWrapper}`]: {
        background: '#EDEDED',
    },
    [`&:hover ${Options}`]: {
        left: '94%',
    },

    variants: {
        selected: {
            true:{
                transform: 'scale(0)',
            }
        }
    }

})



