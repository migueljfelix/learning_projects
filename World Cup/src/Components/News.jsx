import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function News() {
  const [news, setNews] = useState([]);

  const API_NEWS_KEY = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3007c26bf7msh3108dfb9105d4a4p14a87bjsn99bf6a6683bd',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};


  useEffect(() =>{
    getNews();
  }, [])

  const getNews = async () => {
    const check = localStorage.getItem("News");

    if (check) {
      setNews(JSON.parse(check));
    } else {
      const api = await fetch('https://livescore6.p.rapidapi.com/news/v2/list-by-sport?category=2021082315501532387&page=1&number=9', API_NEWS_KEY
      );
      const data = await api.json();

      localStorage.setItem("News", JSON.stringify(data.data));
      setNews(data.data);
    }
  };

  return (
    <NewsWrapper>
      <h2>News</h2>
      <Splide options={{
          rewind: false,
          arrows: false,
          perPage: 4,
          perMove: 2,
          gap: 30,
          padding: "3rem",
          pagination: false,
          breakpoints: {
            623: {
              perPage: 1,
              perMove: 2
            },
            935: {
              perPage: 2,
              perMove: 3
            },
            1247: {
              perPage: 3,
              perMove: 4
            }
          }
        }}>
        {news?.map((data) =>{
            return(
                <SplideSlide key={data.id}>
                    <Card>
                        <CardImg>
                    <img src={data.image.data.urls.uploaded.embed}/>
                    </CardImg>
                    <h3>{data.title}</h3>
                    <Gradient/>
                    </Card>
                </SplideSlide>
            )
        })}
      </Splide>
    </NewsWrapper>
  ); //f8f9fa
}

export default News;

const NewsWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 100px;

  h2 {
    font-size: 46px;
    font-family: "inter", sans-serif;
    font-weight: 600;
    text-align: center;
    margin-bottom:6px;
  }

  @media (min-width:801px){
    padding-top: 40px;
    h2{
        text-align: left;
        font-size: 50px;
        padding-left: 3rem;
    }
}
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  height: 270px;
  min-width: 30%;
  border-radius: 2rem;
  position: relative;
  padding-bottom: 20px;
  background-color: #8a1538;
  overflow: hidden;
 
  
  h3 {
    font-family: "inter", sans-serif;
    z-index: 10;
    font-size: 18px;
    font-weight: 400;
    line-height: 20.3px;
    letter-spacing: 0.7px;
    color: white;
    margin: 12px 8px 8px 10px;
  }

  h4 {
    font-family: "inter", sans-serif;
    font-size: 19px;
    font-weight: 500;
    color: white;
    margin: 8px 8px 12px 8px;
  }

  @media (min-width:801px){
    height: 350px;
    h3{
        font-size: 20px;
        font-weight: 300;
    }
  }
`;

const CardImg = styled.div`
    z-index: 10;
    height: 100%;
    overflow: hidden;
    img{
        width: auto;
        height: 100%;
        transition: 0.5s all ease-in-out;
        @media (min-width:801px){
   
        :hover{
            transform: scale(1.1);
        }
    }
}
    

`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
