import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function Daily() {

  const [movies, setMovies] = useState([])

  useEffect(()=>{
    getDaily()
  },[])


  const getDaily = async () => {

    const api = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json(); 
    setMovies(data.results);
    console.log(movies)
  }

  return (
  <div>
    <Title>Trending Daily</Title>
      <GroupWrapper>
        {movies.map((data) =>{
         return(
          <div key={data.id}>
          <Slink to={"/Movie/"+ data.id}>
              <CardWrapper>
        <ImgWrapper>
          <img src={"https://image.tmdb.org/t/p/w500"+data.poster_path} alt='#'/>
          </ImgWrapper>
        <CardBottom>
            <h3>{data.title}</h3>
            <div>
            <p>{data.release_date.substring(0, 4)}</p>
            
            <p>{Math.round(data.vote_average * 10) / 10}</p>
            </div>
        </CardBottom>
       </CardWrapper>
        </Slink>
        </div>
        )})}
          
          
      </GroupWrapper>
      </div>
    )
  }

export default Daily

const Title = styled.h2`
color: white;
font-size: 38px;
font-family: 'Inter', sans-serif;
font-weight: 700;
text-align: center;
margin: 50px 0px 14px 28px;
`;
const Slink = styled(Link)`
text-decoration: none;
img{
    transition: all 0.3s ease-in-out;
}

`;
const GroupWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 14px;
transition: all 0.3s ease-in-out;

`;

const CardWrapper = styled.div`
margin: 14px;
background-color: #050E12;
height: 352px;
width: 185px;
display: flex;
flex-direction: column;
border-radius: 16px;
font-family: 'Inter', sans-serif;
color: #828282;
justify-content: space-between;
margin-bottom: 10px;
transition: all 0.3s ease-in-out;
cursor: pointer;

:hover{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    img{
        transition: all 0.s ease-in-out;
        transform: scale(1.7)
    }}
`;

const ImgWrapper = styled.div`
width: 100%;
height: 80%;
border-top-left-radius: 16px;
    border-top-right-radius: 16px;
overflow: hidden;
img{
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    width: auto;
    height: 100%;
}

`;

const CardBottom = styled.div`
height: 20%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 3px 12px 8px 12px;
overflow: hidden;

div{
    display: flex;
    justify-content: space-between;
}

h3{
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

}

`;