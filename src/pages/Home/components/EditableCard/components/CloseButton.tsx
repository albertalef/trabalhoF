import { BiWindowClose } from 'react-icons/bi';
import IconButton from '../../../../../components/IconButton';


export default function CloseButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>){

    return <IconButton tabIndex={-1} {...props}><BiWindowClose/></IconButton>

}

