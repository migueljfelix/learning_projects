import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

function Movie() {

let params = useParams();

const [details, setDetails] = useState({});

const fetchDetails = async () => {
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${params.name}}?api_key=${process.env.REACT_APP_API_KEY}`
    );

    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
};

useEffect(() =>{
    fetchDetails();
}, [params.name]);

  return (
    <ContentWrapper>
        <Img src={"https://image.tmdb.org/t/p/w300"+ details.poster_path} alt="" />
        
        <DetailsWrapper>
        <h2>{details.original_title}</h2>
        <h4>{details.tagline}</h4>
        <p>{details.overview}</p>
        </DetailsWrapper>
    </ContentWrapper>
  )
}
///tSxbUnrnWlR5dQvUgqMI7sACmFD.jpg
export default Movie

const ContentWrapper = styled.div`
margin-top: 28px;
display: flex;
padding: 38px;
font-family: 'Inter', sans-serif;
color: white;
@media (max-width:600px){
    flex-direction: column;
  }
`;
const Img = styled.img`
width: auto;
height: 100%;
@media (max-width:600px){
    margin-bottom: 20px;
  }
`;
const DetailsWrapper = styled.div`
display: flex;
flex-direction: column;
margin-left: 12px;
h2{
  font-size: 38px;
  font-weight: 600;
  margin-bottom: 6px;
}
h4{
  margin-top: 6px;
  margin-bottom: 8px;
  font-size: 20px;
}
p{
  margin-top: 8px;
  margin-bottom: 6px;
  font-size: 16px;
  text-align: justify;
  padding-right: 50%;
  
}
@media (max-width:600px)  {
    p{
      padding-right: 0px;
    text-align: left;

    }
    }

  @media (max-width:800px){
    p{
      padding-right: 0px;
    text-align: left;

    }
  }
  @media (max-width:950px){
    p{
      padding-right: 20px;
    text-align: left;

    }
  }
`;