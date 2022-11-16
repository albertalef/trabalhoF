import { MouseEventHandler } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import IconButton from "../../../../../components/IconButton";



export default function StartEditButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>){
    return <IconButton tabIndex={-1} {...props}><AiOutlineEdit /></IconButton>
}