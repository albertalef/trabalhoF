import { MdSmartDisplay } from "react-icons/md"
import Logo from "../../../assets/Logo"
import Button from "../../../components/Button"
import IconButton from "../../../components/IconButton"
import { styled } from "../../../stitches.config"

export default function Header() {

    return (
        <Wrapper>
            <Container>
                <Logo />
                <PageLinksHolder>
                    <PageLink href="#home">Products</PageLink>
                    <PageLink>Solutions</PageLink>
                    <PageLink>Resources</PageLink>
                    <PageLink>Pricing</PageLink>
                </PageLinksHolder>
                <LoginButton as='a' href='/login'>Login</LoginButton>
            </Container>
        </Wrapper>
    )
}


const Wrapper = styled('header', {
    background: '$dark',
    width: '100%',
    display: "flex",
    justifyContent: 'center',
    height: 72,
})
const PageLinksHolder = styled('section', {
    width: 500,
    height: 50,

    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',


    '@sm': {
        display: 'none',
    }
})

const PageLink = styled('a', {
    textDecoration: 'none',
    padding: '15px 30px',
    color: '$white',
    borderRadius: 8,
    
    fontFamily: "DM Sans",
    fontSize: "15px",
    fontWeight: "400",
    opacity: .9,
    cursor: "pointer",

    hover: {
        opacity: .5,
    }

})
const Container = styled('div', {
    responsiveWidth: '$width',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    margin: '0 20px',

})

const LoginButton = styled(Button, {

})

