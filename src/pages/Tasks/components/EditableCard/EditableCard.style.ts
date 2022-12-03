import { styled } from "../../../../stitches.config"

export const Title = styled('textarea', {
    color: '#3F3F3F',
    fontSize: 30,
    fontWeight: 700,
    textAlign: 'left',

    padding: '5px 10px',
    height: 90,

    background: 'transparent',

    outlineWidth: 0,
    border: 0,
    borderRadius: 5,
    "&::-webkit-scrollbar": {
        display: "none",
    },
    resize: 'none',

    variants: {
        editable: {
            true: {
                color: "#6f6f6f",
                outlineColor: "#D0D0D0",
                outlineWidth: 3,
                outlineStyle: "solid",
                '&:hover': {
                    outlineColor: "#C0C0C0",
                }
            }
        }
    }
})


export const Description = styled('textarea', {
    color: "#6f6f6f",

    display: "block",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 1.2,
    textAlign: "left",

    overflowY: 'scroll',
    height: '100%',
    padding: '5px 10px',

    resize: 'none',


    background: 'transparent',

    border: 0,
    borderRadius: 5,

    outlineWidth: 0,

    "&::-webkit-scrollbar": {
        display: "none",
    },

    variants: {
        editable: {
            true: {
                outlineColor: "#D0D0D0",
                outlineWidth: 3,
                outlineStyle: "solid",
                '&:hover': {
                    outlineColor: "#C0C0C0",
                }
            }
        }
    }
})

export const Content = styled('div', {
    width: '85%',
    height: '80%',


    display: 'flex',
    flexDirection: 'column',

    gap: 20
})

export const CardWrapper = styled('div', {
    width: '100%',
    height: 600,

    background: '#F4F4F4',
    borderRadius: 15,

    boxShadow: "0px 3px 15px 2px #00000040",
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',

    '@sm': {
        padding: '20px 0',
        boxShadow: "none",
        height: '100%'
    }
})



export const Options = styled('div', {
    width: '100%',
    height: 110,
    paddingTop: 30,

    background: "#D0D0D0",

    position: 'absolute',

    borderRadius: 15,


    bottom: -110,
    zIndex: -1,

    display: "flex",
    justifyContent: 'space-around',
    alignItems: 'center',

    gap: '5%',

    '@sm': {
        background: "#DFDFDF",

        zIndex: 2,
        borderRadius: 0,
        padding: 0,
        height: 60,
        position: 'fixed',
        bottom: '0',
        top: 0,

        borderBottom: '#C0C0C0 2px solid'
    }
})

export const Container = styled('div', {
    position: "relative",
    width: '100%',
    maxWidth: 800,

    marginBottom: 110,

    '@sm': {
        height: '100%',
        margin: 0,
        maxWidth: 'unset'
    }
})

