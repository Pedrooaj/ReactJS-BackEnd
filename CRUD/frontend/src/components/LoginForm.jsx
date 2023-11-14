import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../contexts/auth";


const FormArea = styled.form`
    background-color: #fff;
    display: flex;
    box-shadow: -1px 6px 40px 5px rgba(0,0,0,0.75);
    -webkit-box-shadow: -1px 6px 40px 5px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 6px 40px 5px rgba(0,0,0,0.75);
    align-items: center;
    flex-direction: column;
    width: 40vw;
    height: 65vh;
    border-radius: 8px;
`;

const Title = styled.h1`
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 36px;
    font-family: 'Courier New', Courier, monospace;
`;

const InputBox = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    position: relative;
`

const Input = styled.input`
    width: 100%;
    height: 35px;
    border: 2px solid gray;
    border-radius: 10px;
    letter-spacing: 2px;
    font-size: 18px;
    text-decoration-line:none;
    padding: 4px;
`;

const Button = styled.button`
    width: 50%;
    height: 50px;
    cursor: pointer;
    background-color: blue;
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 20px;
    box-shadow: 0px 0px 5px #ccc;

    &:hover{
        transition: 0.4s;
        background-color: #7d7dff;
    }
`;

const Label = styled.label`
    position: absolute;
    z-index: 1;
    left: 11px;
    top: -8px;
    background-color: white;
    padding: 2px;
    margin-left: 5px;
    font-family: 'Courier New', Courier, monospace;

`


const LoginForm = () => {
    const {authenticated, login } = useContext(AuthContext);

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login(user, password);
    }


    return(
    
    <FormArea onSubmit={handleSubmit}>
    <Title>Login</Title>
        <InputBox>
            <Label>Usuário</Label>
            <Input type="text" name="user" value={user} onChange={(e) => setUser(e.target.value)} maxLength={15} required/>
        </InputBox>
        <InputBox>
            <Label>Senha</Label>
            <Input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} maxLength={15} required/>
        </InputBox>
        <Button type="submit">Acessar</Button>
    </FormArea>
    
  
    );
};

export default LoginForm;