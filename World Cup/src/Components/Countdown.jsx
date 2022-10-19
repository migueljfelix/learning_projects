import React, { useEffect, useState } from 'react'
import styled from 'styled-components';


function Countdown() {

    const calculateTimeLeft = () =>{
    const difference = +new Date("2022-11-20T00:00:00+00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        };
      }
  
      return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });

  return (
    <CountdownWrapper>
      <h3>Coutdown</h3>
      <CoutdownDiv>
          <li>
            <span>{timeLeft.days}</span>
            <span className='timer-text'>DAYS</span>
          </li>
          <li>
            <span>{timeLeft.hours}</span>
            <span className='timer-text'>HOURS</span>
          </li>
          <li>
            <span>{timeLeft.minutes}</span>
            <span className='timer-text'>MINUTES</span>
          </li>
      </CoutdownDiv>
    </CountdownWrapper>
  );
}

export default Countdown

const CountdownWrapper = styled.div`
display: flex;
flex-direction: column;
color: white;
align-items: center;
font-family: 'inter', sans-serif;
margin-top: 26px;

h3{
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 1px;
}
`;

const CoutdownDiv = styled.ul`
margin-top: 12px;
display: flex;
align-items: center;

span{
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-family: "El Messiri", sans-serif;
    color: White;
    font-size: 30px;
    font-weight: 600;
}
.timer-text{
    font-size: 12px;
    font-family: 'inter', sans-serif;
    font-weight: 400;
    text-transform: capitalize;
}
`;

