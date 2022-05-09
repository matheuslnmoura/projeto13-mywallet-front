import "../assets/styles/style.css" //importing general CSS file
import styled from 'styled-components'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserContext from "../context/UserContext"
import {useState} from "react"

import Login from "./Login"

export default function App() {
    const [userInfo, setUserInfo] = useState({email:"", name:"", password:""})
    return (
        <UserContext.Provider value={{userInfo, setUserInfo}} >
            <Main>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Login />} />
                    {/* <Route path="/singUp" element = {<SignUp />} /> */}
                </Routes>
                </BrowserRouter>
            </Main>
        </UserContext.Provider>
    )
}

const Main = styled.main `
    width: 100vw;
    max-width: 450px;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--main-color);

`
