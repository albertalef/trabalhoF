import { styled } from "../stitches.config"

const IconButton = styled('button', {

    width: 50,
    height: 50,

    background: "transparent",
    border: 0,
    borderRadius: 5,

    cursor: 'pointer',

	flexShrink: 0,

    overflow: "hidden",
    '& svg': {
        display: 'block',
        fontSize: 26,
        color: '#A0A0A0',
        margin: 'auto',
    },

    '&:hover svg': {
        color: '#808080',
    },
    '&:hover': {
        outlineColor: "#C0C0C0",
        outlineWidth: 3,
        outlineStyle: "solid",
        
    },
    '&:active': {
        outlineWidth: 3,
        outlineStyle: "solid",
        background: '#3f3f3f10',
    },
    variants: {
        hidden: {
            "true": {
                width: 0,
            }
        },

        invisible: {
            true: {
                display: "none"
            }
        } 
    }
})

export default IconButton;