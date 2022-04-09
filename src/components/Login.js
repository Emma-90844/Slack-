import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core"
import { auth, provider } from "../firebase";

function Login() {

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithPopup(provider).catch((error) => 
        alert(error.message))

    }
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://www.oneyoungworld.com/sites/default/files/2021-07/slack_0.jpg" />
        <h1>Sign in into Slack</h1>
      <p><b>EMMA-90844 SlackBuilt</b></p>
      <Button type="submit" onClick={signIn}>
        Sign in with Google
      </Button>
      
      </LoginInnerContainer>
      
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #f8f8f8;
`;

const LoginInnerContainer = styled.div`
  padding: 50px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    height: 100px;
    margin-top: 40px;
    object-fit: cover;
  }
  >button{
      margin-top: 50px;
      text-transform: inherit !important;
      background-color: #0a8d48 !important;
      color: white;
      padding: 5px 15px;
  }
`;

// const Button = styled.div``;
