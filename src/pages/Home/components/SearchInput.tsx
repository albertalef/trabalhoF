import { ChangeEventHandler, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { styled } from "../../../stitches.config";

interface SearchInputProps {
    onChange?: ChangeEventHandler<HTMLInputElement>,
    value?: string | number,
}

export default function SearchInput({ onChange, value }: SearchInputProps) {
    const [hideLeftIcon, setHideLeftIcon] = useState(false);

    return (
        <Container>
            <LeftIcon
                htmlFor="searchInput"
                hidden={hideLeftIcon} >
                <AiOutlineSearch />
            </LeftIcon>
            <Input
                id="searchInput"
                onFocus={() => setHideLeftIcon(true)}
                onBlur={() => setHideLeftIcon(false)}
                placeholder="Search" onChange={onChange}
                value={value} />
        </Container>
    )
}

const Input = styled('input', {
    padding: '0 50px',

    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,

    color: '#727272',
    width: "100%",
    height: '100%',
    boxSizing: "border-box",
    background: "#f4f4f4", // #f4f4f4
    border: 0,
    borderRadius: 5,

    '&::placeholder': {
        color: "#A5A5A5",
    },

    '&:hover': {
        background: '#EDEDED',
        // outlineColor: "#CFCFCF",
        // outlineWidth: 2,
        // outlineStyle: "solid",
    },
    '&:focus': {
        outlineWidth: 0,
        color: "#4B4B4B"
    }
})

const LeftIcon = styled('label', {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 18,

    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',

    color: "#A5A5A5",

    position: "absolute",
    width: 52,
    height: 52,

    transition: 'opacity ease 125ms',

    variants: {
        hidden: {
            true: {
                opacity: 0,
            }
        }
    }
})

const Container = styled('div', {
    width: '100%',
    maxWidth: 600,
    height: 52,
    position: "relative",
})
