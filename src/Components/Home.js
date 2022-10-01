import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import BgSrc from "../public/images/home-background.png";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setDisneyMovies, setMarvelMovies } from "features/movie/movieSlice";
import { getDocs, collection } from "firebase/firestore";

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const refDisneyMovies = collection(db, "disneyMovies");
    async function getMovies() {
      getDocs(refDisneyMovies).then((snapshot) => {
        let disneyMvoies = [];
        let marvelMvoies = [];
        snapshot.docs.forEach((doc) => {
          console.log(doc.data().group);
          switch (doc.data().group) {
            case "disneyMovies":
              disneyMvoies.push({ id: doc.id, ...doc.data() });
              break;
            case "marvelMovies":
              marvelMvoies.push({ id: doc.id, ...doc.data() });
              break;
            default:
              console.log("fetching from firebase wasnt succesful");
          }
        });
        console.log(marvelMvoies);
        dispatch(setDisneyMovies(disneyMvoies));
        dispatch(setMarvelMovies(marvelMvoies));
        setLoading(!loading);
      });
    }
    getMovies();
  }, []);

  return (
    <Container>
      {loading === true ? (
        <Loading />
      ) : (
        <>
          <ImgSlider />
          <Viewers />
          <Movies />
        </>
      )}
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url(${BgSrc}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
