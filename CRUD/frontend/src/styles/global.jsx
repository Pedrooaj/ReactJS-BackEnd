import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
     }

     body{
        display: flex;
        height: 100vh;
        width: 100vw;
        justify-content: center;
        background-color: #f2f2f2;
     }
`;

export default Global;