import { styled } from "../../../../stitches.config"

export const Input = styled('input', {
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
    },

    '@sm': {
        background: "transparent",
    }
})

export const LeftIcon = styled('label', {
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


})

export const Container = styled('div', {
    width: '100%',
    maxWidth: 600,
    height: 52,
    position: "relative",
    borderRadius: 5,
    overflow: "hidden",
    boxShadow: "0px 3px 8px 0px #00000040",

    '@sm': {
        boxShadow: 'none',
    }
})
