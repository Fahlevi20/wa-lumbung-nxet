import { Directions } from "@mui/icons-material";
import { Button } from "@mui/material";
import Head from "next/head";
import styled from "styled-components"

function Login() {
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo
                src ="https://upload.wikimedia.org/wikipedia/commons/1/19/WhatsApp_logo-color-vertical.svg"/>
                <Button variant="outlined">sign in with Google</Button>

            </LoginContainer>
        </Container>
    )
}

export default Login;

const Container = styled.div`
display: grid;
place-items: center;
height: 100vh; `;
const LoginContainer = styled.div`
display:flex;
flex-Direction:column`;

const Logo = styled.img`
height: 200px;
width: 200px;
margin-bottom:50px;`;