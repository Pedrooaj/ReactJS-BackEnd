import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/auth";
import { AuthProvider } from "../contexts/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { IoMdExit } from "react-icons/io";



const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
  &:hover{
    transition: 0.3s;
    background-color: #7ba9e6;
  }
`;





const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
      user.data_nascimento.value = onEdit.data_nascimento;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
      .put("http://localhost:8000/" + onEdit.id, {
      nome: user.nome.value,
      email: user.email.value,
      fone: user.fone.value,
      data_nascimento: user.data_nascimento.value,
      })
      .then(({ data }) => toast.success(data))
      .catch(({ data }) => toast.error(data));
    } else {
    await axios
    .post("http://localhost:8000", {
      nome: user.nome.value,
      email: user.email.value,
      fone: user.fone.value,
      data_nascimento: user.data_nascimento.value,
    })
    .then(({ data }) => toast.success(data))
    .catch(({ data }) => toast.error(data));
   }

  user.nome.value = "";
  user.email.value = "";
  user.fone.value = "";
  user.data_nascimento.value = "";

  setOnEdit(null);
  getUsers();
  };
  
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    setUsuario("");
    setPassword("");
    localStorage.clear();
    navigate("/login")
  };
  

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome"  maxLength={15} required/>
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" maxLength={48} required />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="fone" maxLength={10} required/>
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" type="date" maxLength={8}/>
      </InputArea>

      <Button type="submit">SALVAR</Button>
      <Button onClick={handleLogout}><IoMdExit></IoMdExit></Button>
    </FormContainer>
  );
};

export default Form;