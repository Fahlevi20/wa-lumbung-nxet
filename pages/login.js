import { auth, provider } from "@/firebase";
import { signInWithPopup } from "firebase/auth";
import { Directions } from "@mui/icons-material";
import { Button } from "@mui/material";
import Head from "next/head";
import styled from "styled-components"

function Login() {
    const signIn = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            // Handle successful sign-in if needed
            console.log("Sign-in successful:", result.user);
            // Redirect to a different page or take further action if necessary
          })
          .catch((error) => {
            // Handle errors or display them to the user
            alert("Sign-in failed. Please try again.");
            console.error("Sign-in error:", error);
          });
      };
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo
                src ="https://upload.wikimedia.org/wikipedia/commons/1/19/WhatsApp_logo-color-vertical.svg"/>
                <Button onClick={signIn} variant="outlined">sign in with Google</Button>

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
  padding: 100px;
  display: flex;
  flex-direction: column; // Corrected property name
  align-items: center;
  background-color: whitesmoke;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;



const Logo = styled.img`
height: 200px;
width: 200px;
margin-bottom:50px;`;