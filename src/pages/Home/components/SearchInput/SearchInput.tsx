import { ChangeEventHandler } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import * as C from "./SearchInput.style";

interface SearchInputProps {
    onChange?: ChangeEventHandler<HTMLInputElement>,
    value?: string | number,
}

export default function SearchInput({ onChange, value }: SearchInputProps) {

    return (
        <C.Container>
            <C.LeftIcon
                htmlFor="searchInput" >
                <AiOutlineSearch />
            </C.LeftIcon>
            <C.Input
                id="searchInput"
                placeholder="Search" onChange={onChange}
                value={value} />
        </C.Container>
    )
}
