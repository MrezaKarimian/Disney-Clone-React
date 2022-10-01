import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliderimg1 from "../public/images/slider-badging.jpg";
import Sliderimg2 from "../public/images/slider-badag.jpg";
import Sliderimg3 from "../public/images/slider-scale.jpg";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src={Sliderimg1} alt="" />
        <WatchBtn>Watch Now</WatchBtn>
      </Wrap>
      <Wrap>
        <img src={Sliderimg2} alt="" />
        <WatchBtn>Watch Now</WatchBtn>
      </Wrap>
      <Wrap>
        <img src={Sliderimg3} alt="" />
        <WatchBtn>Watch Now</WatchBtn>
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
    opacity: 0.8;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  position: relative;
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition: all 300ms ease;

    &:hover {
      border: 4px solid rgba(240, 249, 249, 0.5);
    }
  }
`;
const WatchBtn = styled.div`
  font-size: 16px;
  position: absolute;
  padding: 9px 25px;
  border: 2px solid rgba(240, 249, 249, 0.6);
  color: rgba(240, 249, 249, 0.6) ;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  top: 70%;
  left: 10%;
  cursor: pointer;

  &:hover{
    border-color: rgba(240, 249, 249, 0.8);
    color: rgba(240, 249, 249, 0.8) ;
  }
`;
