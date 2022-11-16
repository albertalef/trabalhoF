import { MdRemoveDone } from "react-icons/md";
import IconButton from "../../../../../components/IconButton";

export default function FinishButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return <IconButton tabIndex={-1} {...props}><MdRemoveDone /></IconButton>
}