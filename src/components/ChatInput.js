import { Button } from "@material-ui/core";
import React, {  useState } from "react";
import styled from "styled-components";
import firebase from 'firebase';
import { db } from "../firebase";

function ChatInput({ channelName, channelId }) {
    // Grab input field data
    const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault(); //Prevent default refresh from occuring
  

    // Prevent any action without a channel id
    if(channelId){
        return false
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user:'onencan emma',
        userImage:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.refactory.ug%2Fcohort%2Femmanuel-onencan&psig=AOvVaw3tH_TQPZE7If23_5bXQxYB&ust=1636641686943000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICFhNODjvQCFQAAAAAdAAAAABAD'
    });
     setInput('')
    };
  return (
    <ChatInputContainer>
      <form>
        <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder={`Message #ROOM`} 
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND 
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  >form >input {
      position: fixed;
      bottom: 30px;
      width: 60%;
      border: 1px solid gray;
      border-radius:3px;
      padding: 20px;
      outline: none;

  }
  >form >button {
      display: none !important;
  }
`;
