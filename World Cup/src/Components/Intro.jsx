import React from "react";
import styled from "styled-components";
import logo from "../assets/qatar-logo.png";
import Countdown from './Countdown';

function Intro() {
  return (
    <Hero>
      <Logo>
        <img src={logo} alt="" />
        <Title_div>
        <h1>FIFA World Cup</h1>
        <h2>Qatar 2022</h2>
        <Countdown/>
        </Title_div>
      </Logo>
      
    </Hero>
  );
}




export default Intro;



const Hero = styled.div`
  background-color: #8a1538; 
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  justify-content: space-around;
  border-radius: 0px 0px 28px 28px;

  @media (min-width:801px)  { 
    height: 55vh;
  }

`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  img {
    height: 50vh;
    width: auto;

    @media (min-width:600px)  {
      height: 40vh;
    }
    @media (min-width:600px)  {
      height: 40vh;
    }
  }

  @media (min-width:800px){
    flex-direction: row;
    justify-content: center;
  }

 
  


`;

const Title_div = styled.div`
display: flex;
flex-direction: column;

:last-child(){
  position: absolute;
  bottom: 0;
}

h1 {
  margin-top: 16px;
  font-family: "El Messiri", sans-serif;
  color: White;
  font-size: 38px;
  text-align: center;
  font-weight: 700;
}

h2 {
  margin-top: 8px;
  font-family: "El Messiri", sans-serif;
  color: White;
  font-size: 30px;
  text-align: center;
}
@media (min-width:801px){
  margin-left: 30px;
    h1{
      font-size: 64px;
    }}
    h2{
      font-size: 45px;
    }
    
  
`;


/*

@media (min-width:320px)  {  smartphones, portrait iPhone, portrait 480x320 phones (Android)  }
@media (min-width:480px)  {  smartphones, Android phones, landscape iPhone  }
@media (min-width:600px)  {  portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android)  }
@media (min-width:801px)  { tablet, landscape iPad, lo-res laptops ands desktops  }
@media (min-width:1025px) {  big landscape tablets, laptops, and desktops  }
@media (min-width:1281px) {  hi-res laptops and desktops  }

*/

