import { AiOutlineDelete } from "react-icons/ai";
import IconButton from "../../../../../components/IconButton";

export default function DeleteButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>){

    return <IconButton tabIndex={-1} {...props}><AiOutlineDelete /></IconButton>
}