import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide"; //carousell is the splide, splide slide is each card
import "@splidejs/react-splide/css"; //css import 
import { Link } from "react-router-dom";



function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    //makes get_popular run asap
    getPopular();
  }, []); //empty array means only run it when component gets mounted and we can pass other invormation

  const getPopular = async () => {
    // async bc theres data we need to wait for, to make sure to have the data before rendering

    const check = localStorage.getItem("popular");
    //either goes to local storage to get data or does fetch and save it there
    if (check) {
      setPopular(JSON.parse(check));
      //when pulling back, putting it in a array again (parsing it back)
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json(); // data is json format to play around

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      //only possible to save strings in local storage
      setPopular(data.recipes);
      console.log(data.recipe);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>

        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((recipe) => {
            //looping over and outputing something

            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/"+ recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;

/*
framer-motion - for animations
react-icons - for icons
react-router-dom - for routing
styled-components - for css
splided - for carroussel
*/
