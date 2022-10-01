/* eslint-disable array-callback-return */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  selectDisneyMovies,
  selectMarvelMovies
} from "features/movie/movieSlice";
import { useSelector } from "react-redux";
import Slider from "react-slick";

function Movies() {
  const disneyMovies = useSelector(selectDisneyMovies);
  const marvelMovies = useSelector(selectMarvelMovies);

  let settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true
  };

  return (
    <Container>
      <h4>Disney Movies</h4>
      <Carousel {...settings}>
        {disneyMovies.map((movie) => (
          <Link key={movie.id} to={`/detail/${movie.id}`}>
            <Wrap>
              <img src={movie.titleImg} alt="" />
            </Wrap>
          </Link>
        ))}
      </Carousel>
      <h4>Marvel Movies</h4>
      <Carousel {...settings}>
        {marvelMovies.map((movie) => (
          <Link key={movie.id} to={`/detail/${movie.id}`}>
            <Wrap>
              <img src={movie.titleImg} alt="" />
            </Wrap>
          </Link>
        ))}
      </Carousel>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  h4 {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-left: 10px;
    color: rgba(249, 249, 249, 0.8);
    overflow: hidden;
  }
`;

const Carousel = styled(Slider)`
  margin-bottom: 50px ;
  width: 100%;
  height: 100%;

  button {
    z-index: 1;
    opacity: 0.4;
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 10px;
  cursor: pointer;
  border: 3px solid rgb(249, 249, 249, 0.1);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    /* box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px; */
  }
`;
