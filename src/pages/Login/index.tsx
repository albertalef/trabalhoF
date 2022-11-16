import { styled } from "@stitches/react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthProvider from "../../utils/AuthProvider";
import LoginForm from "./components/LoginForm";

export default function Login(){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(searchParams.has('logout')) AuthProvider.logout();
        
		AuthProvider.validate()
		.then(() => navigate('/'))
		.catch(() => setIsLoading(false));
	}, [])

    return(
        <Section>
            {isLoading ? <h1>Loading</h1> : <LoginForm/>}
        </Section>
    )
}

const Section = styled('section', {
    background: "white",
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
})
