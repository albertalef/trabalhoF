import { styled } from "../stitches.config";


const Button = styled('button', {
    color: '$white',
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "700",

    background: '$absoluteBlack',
    padding: '15px 30px',
    borderRadius: 8,

    border: '0',
    
    cursor: 'pointer',
    textDecoration: 'none',
    hover: {
        background: '$black'
    }
    
})


export default Button;