import styled from "styled-components"
import { useContext } from "react";
import axios from "axios";

import Input from "./Input"
import UserContext from "../context/UserContext"

export default function Login() {
    const {userInfo, setUserInfo} = useContext(UserContext)
    const {email, name, password} = userInfo

    function userLogin() {
        const URL = `https://my-wallet-matheuslnmoura.herokuapp.com/login`
        const loginObject= {email, password}
        
        const request = axios.post(URL, loginObject);

        request.then((response)=>{
            const loginResponse = response.data;
            console.log(loginResponse)
        })
        request.catch((error)=>{
            console.log(error.response.data.message)
        })
    }

    return (
        <LoginContainer>
            <h1>MyWallet</h1>
            <Input type = {"email"} id = "email" placeholder = "email" />
            <Input type = {"password"} id = "password" placeholder = "senha" />
            <ButtonContainer>
                <button onClick={()=>{
                    userLogin();
                }}>Entrar</button>
            </ButtonContainer>
            <p><a href="">Primeira vez? Cadastre-se</a></p>
        </LoginContainer>
    )
}

const LoginContainer = styled.section`
    width: 100%;
    overflow-y: scroll;
    margin: auto;

    h1 {
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: var(--white-color);
        text-align: center;
        margin-bottom: 24px;
    }

    p{
        width: fit-content;
        margin: 25px auto;
    }
    a{
        color: var(--white-color);
        text-decoration: none;
    }
`

const ButtonContainer = styled.div`
    width: 90%;
    height: 60px;
    background-color: var(--button-color);
    border-radius: 5px;
    margin: auto;
    margin-bottom: 13px;

    button {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        color: var(--white-color);
        font-weight: 700;
    }
`