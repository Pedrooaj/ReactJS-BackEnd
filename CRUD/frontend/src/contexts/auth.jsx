import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("usuario");

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, []);
    
    const login = (usuario, password) => {

        console.log("login auth", {usuario, password});

        // api deve criar uma session

        const loggedUser = {
            id:"123",
            usuario,
        }

        localStorage.setItem("usuario", JSON.stringify(loggedUser));

        if(password === "741852" && usuario === "admin") {
            setUser(loggedUser);
            navigate("/");
        }
        if(password !== "741852") {
          alert('Senha Incorreta')
        }
        if(usuario!== "admin") {
            alert('Usuário Incorreto')
          }
    };
    const logout = () => {
        console.log("logout");
        setUser(null);
        localStorage.removeItem('user');
        navigate("/login");
    };
    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
} 

