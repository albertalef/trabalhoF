import { styled } from "../../stitches.config";
import background from "../../assets/Hero-section.png"



export const Page = styled('main', {
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundSize:"cover",
    '@sm': {
        height: 'unset'
    }
})

