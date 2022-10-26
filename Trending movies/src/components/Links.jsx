import React from 'react'
import { NavLink} from "react-router-dom";
import styled from 'styled-components'
import Search from './Search';

function Links() {
  return (
    <Navigation>
      <LinkWrapper>
      <SLink to={"/"}>Home</SLink>
      <SLink to={"/trending"}>Trending</SLink>
      </LinkWrapper>
      <Search/>
    </Navigation>
  )
}

export default Links

const Navigation = styled.div`
display: flex;
height: 50px;
background-color: #050E12;
justify-content: space-between;
align-items: center;
padding-right: 68px;
text-decoration: none;
transition: all 0.7s ease-in-out;

@media (max-width:800px){
    padding-right: 8px;
  }
`;

const LinkWrapper = styled.div`
margin-left: 28px;
@media (max-width:800px){
    margin-left: 8px;
  }
`;

const SLink = styled(NavLink)`
font-family: 'Inter', sans-serif;
color: White;
text-decoration:none;
font-size: 22px;
font-weight: 500;
margin-left: 9px;
margin-right: 9px;
transition: all 0.3s ease-in-out;

:hover{
font-weight:700;
}

@media (max-width:600px)  {
  font-size: 12px;
    }

  @media (max-width:800px){
    font-size: 15px;

  }
  @media (max-width:950px){
    font-size: 18px;
  }

`;