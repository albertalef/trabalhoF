import { keyframes, styled } from "@stitches/react"
import { ChangeEventHandler, MouseEventHandler, useRef, useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BiError } from 'react-icons/bi'


interface InputBarProps {
    name: string,
    type: 'text' | 'password' | 'email',
    error?: string,
    required?: boolean,
    value?: string | number | undefined,
    id?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    canHide?: boolean,
}



export default function InputBar({ id, name, error, type, value, onChange, canHide }: InputBarProps) {

    const [showPassword, setShowPassword] = useState(false);
    const [inputIsFocused, setInputIsFocused] = useState(false);

    return (
        <Wrapper>
            <InputHolder>
                <Input
                    id={id || "input-" + name.toLocaleLowerCase()}
                    autoComplete="off"
                    autoCapitalize="none"
                    autoCorrect="off"
                    placeholder={name}
                    type={type == 'password' && (!showPassword && canHide) ? 'password' : 'text'}
                    value={value}
                    onFocus={() => setInputIsFocused(true)}
                    onBlur={() => setInputIsFocused(false)}
                    onChange={onChange}
                />
                <Button
                    hidden={!(canHide && type == "password" && !inputIsFocused)}
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                    tabIndex={-1}
                >
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </Button>
            </InputHolder>
            <ErrorLabel active={!!error}><BiError /> {error}</ErrorLabel>
        </Wrapper>
    )
}

export const Wrapper = styled('div', {
    width: "100%",
    display: 'flex',
    flexDirection: 'column'
})
const InputHolder = styled('div', {
    width: "100%",
    position: "relative",
})

export const Label = styled('label', {
    color: '#e1e1e1',
    textAlign: 'center',
    fontSize: 20
})

export const Input = styled('input', {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    color: '#525252',
    width: "100%",
    boxSizing: "border-box",
    padding: "16px 24px 16px 24px",
    background: "#EDEDED",
    borderRadius: 5,
    border: 0,

    '&::placeholder': {
        color: "#A5A5A5",
    },

    '&:hover': {
        outlineColor: "#CFCFCF",
        outlineWidth: 2,
        outlineStyle: "solid",
    },
    '&:focus': {
        outlineColor: "#AAAAAA",
        outlineWidth: 2,
        outlineStyle: "solid",
        color: "#1B1B1B"
    }
})
export const ErrorLabel = styled('p', {
    display: 'flex',
    paddingTop: 4,
    color: '#004C5E',
    textAlign: "left",
    fontSize: 0,
    fontWeight: 400,
    letterSpacing: 0.2,
    height: 14,




    variants: {
        active: {
            true: {
                fontSize: 12,

                '& svg': {
                    paddingRight: 3,
                    display: 'inline-block',
                    margin: 0,
                    fontSize: 14,
                },
            }
        }
    }
})
const Button = styled('button', {
    position: "absolute",
    right: 15,
    top: '50%',
    transform: 'translate(0, -50%)',

    overflow: 'hidden',

    width: 30,
    height: 30,
    border: 0,

    background: "#ededed",
    borderRadius: 5,

    transition: 'width 0.5s ease-in-out',
    '& svg': {
        display: 'block',
        fontSize: 17,
        color: '#A5A5A5',
        margin: 'auto',
    },

    '&:hover svg': {
        color: '#808080',
    },
    '&:hover': {
        outlineColor: "#CFCFCF",
        outlineWidth: 2,
        outlineStyle: "solid",
    },
    variants: {
        hidden: {
            true: {
                width: 0,
            }
        }
    }
})
