import React from "react";
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

function Header() {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTimeIcon />
      </HeaderLeft>

      {/* Header Search */}
      <HeaderSearch>
          <SearchIcon/>
          <input placeholder='search channels chats'/>
      </HeaderSearch>

      {/* Header Right */}
      <HeaderRight>
        <HelpOutlineIcon/>
      </HeaderRight>












    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: var(--slack-color);
  color: white;
`;
const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  color: white;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
display: flex;
align-items: center;
flex: 0.4;
background-color: #421f44;
text-align: center;
border-radius:6px;
padding: 0 50px;
color: gray;
border: 1px solid gray;
>input{
    border-radius:6px;
    background-color: transparent;
    border: none;
    text-align:center;
    min-width: 30vw;
    color: 	#D0D0D0;
    outline: 0;
}

`
const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;
    >.MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px
    }

`