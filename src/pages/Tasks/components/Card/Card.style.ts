import { AiOutlineCheckCircle } from "react-icons/ai"
import IconButton from "../../../../components/IconButton"
import { styled } from "../../../../stitches.config"


export const FinishedIcon = styled(AiOutlineCheckCircle, {
    color: '#AFAFAF',
    fontSize: 20,
    fontWeight: 500,

    position: 'absolute',
    top: 15,
    right: 15,

    variants: {
        finished: {
            false: {
                display: 'none',
            }
        }
    }
})


export const DateField = styled('p', {
    color: '#AfAfAf',
    fontSize: "11px",
    fontWeight: "500",
    textAlign: "right",
    verticalAlign: 'bottom',
})


export const Title = styled('h1', {
    color: '#3F3F3F',
    fontSize: 21,
    fontWeight: 700,
    textAlign: 'left',

    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",

})


export const Description = styled('p', {
    color: "#6f6f6f",

    fontSize: "15px",
    fontWeight: "500",
    lineHeight: 1.2,
    textAlign: "left",

    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",

    width: "100%",
    height: 92,

})

export const Button = styled(IconButton, {

    width: 35,
    height: 35,


    transition: 'width 0.5s ease-in-out',

    '& svg': {
        fontSize: 17,
    },

    '@sm': {
        width: 40,
        height: 40,
        '& svg': {
            fontSize: 22,
        },
    }
})


export const Options = styled('section', {
    transition: 'left 80ms, top 80ms',



    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    borderRadius: '0px 15px 15px 0px',
    paddingLeft: '6%',
    width: "15%",
    height: "100%",

    zIndex: -1,

    position: "absolute",
    bottom: "0",
    left: "79%",

    background: "#D0D0D0",

    '@sm': {
        borderRadius: '0px 0px 15px 15px',
        flexDirection: 'row',
        padding: 0,
        paddingTop: 20,
        height: '40%',
        width: '100%',

        left: 0,
        top: '20%',
    },
})

export const CardWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-between",

    position: 'relative',


    background: '#F4F4F4',
    padding: '20px 50px',
    paddingBottom: 30,
    borderRadius: 15,


    letterSpacing: 0.2,

    width: 288,
    height: 145,

    transition: 'background 80ms',
    boxShadow: "0px 0px 8px 0px #00000030",

    '@sm': {
        gap: 9,
        width: '100%',
        height: 180,
        padding: '10px 50px',
        paddingBottom: 20,
        boxSizing: 'border-box',
        boxShadow: "none",
    },

    variants: {
        finished: {
            true: {
                outline: "5px #DfDfDf solid",
                '@sm': {
                    outline: 'none'
                }
            }
        }
    }


})

export const Container = styled('section', {
    display: 'inline-block',
    position: 'relative',
    zIndex: 0,
    transition: 'transform ease 250ms, margin 80ms',

    // '&:hover': {
    //     // transform: 'scale(101%)',
    //     zIndex: 1,
    //     '@sm': {
    //         marginBottom: '58px'
    //     }
    // },

    // [`&:hover ${CardWrapper}`]: {
    //     background: '#EDEDED',
    //     '@sm': {
    //         background: '#F4F4F4',

        // }
    // },
    // [`&:hover ${Options}`]: {
    //     left: '94%',

    //     '@sm': {
    //         left: 0,
    //         top: '86%'
    //     }
    // },

    '@sm': {
        MsUserSelect: 'none',
        WebKitUserSelect: 'none',
        userSelect: 'none',
        responsiveWidth: 1100,

    },

    variants: {
        selected: {
            true: {
                zIndex: 1,

                [`${CardWrapper}`]: {
                    background: '#EDEDED',
                    '@sm': {
                        background: '#F4F4F4',
            
                    }
                },
                [`${Options}`]: {
                    left: '94%',
            
                    '@sm': {
                        left: 0,
                        top: '86%'
                    }
                },

                '@sm': {
                    marginBottom: '58px'
                }
            }
        }
    }

})



