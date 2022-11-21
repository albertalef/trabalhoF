import { keyframes } from "@stitches/react"
import DefaultPage from "../../components/DefaultPage"
import { styled } from "../../stitches.config"

export default function Loading(){
    return (
        <Page>
                <Sphere css={{animationDelay: '100ms'}}/>
                <Sphere css={{animationDelay: '50ms'}}/>
                <Sphere/>
        </Page>
    )
}

const Page = styled(DefaultPage, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})
const animationMove = keyframes({
    '50%': {
        transform: 'translateY(-50px)',
        background: '#8f8f8f',
    },
})
const Sphere = styled('div', {
    background: '#3F3F3F',
    borderRadius: 9999,
    width: 20,
    height: 50,
    margin: 5,
    animation: `${animationMove} ease-in-out 1s infinite`
})
