import React from 'react'
import styled from 'styled-components'
import ViewersSrc1 from '../public/images/viewers-disney.png'
import ViewersSrc2 from '../public/images/viewers-marvel.png'
import ViewersSrc3 from '../public/images/viewers-national.png'
import ViewersSrc4 from '../public/images/viewers-pixar.png'
import ViewersSrc5 from '../public/images/viewers-starwars.png'
import videoDisney from "../public/videos/1564674844-disney.mp4"
import videoMarvel from "../public/videos/1564676115-marvel.mp4"
import videoNat from "../public/videos/1564676296-national-geographic.mp4"
import videoPixar from "../public/videos/1564676714-pixar.mp4"
import videoStart from "../public/videos/1608229455-star-wars.mp4"



function Viewers() {
    const stopVideo =(e)=> {
        e.target.pause();
    }
    const playVideo =(e)=>{
        e.target.play();
    }
    return (
        <Container>
            <Wrap>
                <img src={ViewersSrc1} alt="" />
                <Video onMouseOver={playVideo} onMouseOut={stopVideo} loop preload="none" muted >
                    <source src={videoDisney} type="video/mp4"/>
                </Video>
            </Wrap>
            <Wrap>
                <img src={ViewersSrc2} alt="" />
                <Video onMouseOver={playVideo} onMouseOut={stopVideo} loop preload="none" muted >
                    <source src={videoMarvel} type="video/mp4"/>
                </Video>
            </Wrap>
            <Wrap>
                <img src={ViewersSrc3} alt="" />
                <Video onMouseOver={playVideo} onMouseOut={stopVideo} loop preload="none" muted >
                    <source src={videoNat} type="video/mp4"/>
                </Video>
            </Wrap>
            <Wrap>
                <img src={ViewersSrc4} alt="" />
                <Video onMouseOver={playVideo} onMouseOut={stopVideo} loop preload="none" muted >
                    <source src={videoPixar} type="video/mp4"/>
                </Video>
            </Wrap>
            <Wrap>
                <img src={ViewersSrc5} alt="" />
                <Video onMouseOver={playVideo} onMouseOut={stopVideo} loop preload="none" muted >
                    <source src={videoStart} type="video/mp4"/>
                </Video>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5 , minmax(0 , 1fr)) ;
`

const Wrap = styled.div`
    position: relative;
    border: 3px solid rgb(249, 249, 249 ,0.1);
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px ,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px ,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249 , 249 ,249 , 0.5);
    }
`
const Video = styled.video`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
    object-fit: cover;
    opacity: 0;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        opacity: 0.8;
    }
`