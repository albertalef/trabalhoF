import { MdRemoveDone } from "react-icons/md";
import IconButton from "../../../../../components/IconButton";

export default function UndoFinishButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>){
    return <IconButton tabIndex={-1} {...props} ><MdRemoveDone /></IconButton>
}