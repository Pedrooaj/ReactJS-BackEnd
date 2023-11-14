import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../styles/global"
import LoginForm from "../../components/LoginForm";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoginPage = () => {
    return(
        <>
        <Container>
            <LoginForm />
        </Container>
        <GlobalStyle />
        </>
    )
}

export default LoginPage;