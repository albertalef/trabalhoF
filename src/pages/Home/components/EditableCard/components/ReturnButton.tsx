import { TiArrowBackOutline } from "react-icons/ti";
import IconButton from "../../../../../components/IconButton";

export default function ReturnButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>){
    return <IconButton tabIndex={-1} {...props}><TiArrowBackOutline /></IconButton>
}