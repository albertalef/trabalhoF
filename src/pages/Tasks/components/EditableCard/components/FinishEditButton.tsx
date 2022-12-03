import { AiOutlineCheck } from "react-icons/ai";
import IconButton from "../../../../../components/IconButton";

export default function FinishEditButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>){

    return <IconButton tabIndex={-1} {...props} ><AiOutlineCheck/></IconButton>
}