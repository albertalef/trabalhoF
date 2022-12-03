import { styled } from "@stitches/react";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthProvider from "../../utils/AuthProvider";
import Loading from "../Loading";
import LoginForm from "./components/LoginForm";

export default function Login(){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const {mutate: validate, isLoading, isIdle} = useMutation(AuthProvider.validate, {
        onSuccess: () => navigate('/tasks'),
    })

    useEffect(() => {
        if(searchParams.has('logout')) AuthProvider.logout();
        validate();
	}, [])

    return(
        <Section>
            {isLoading || isIdle ? <Loading/> : <LoginForm/>}
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
