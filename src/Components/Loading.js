import React from "react";
import styled, { keyframes } from "styled-components";

function Loading() {
  return (
    <LoderContainer>
      <Spinner>
        <InnerSpinner></InnerSpinner>
      </Spinner>
    </LoderContainer>
  );
}
export default Loading;

const LoderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const breatheAnimation = keyframes`
    to {
        transform: rotate(360deg);
    }
    50%{
        transform: scale(.8) rotate(360deg);
    }
    100%{
        transform: scale(1) rotate(360deg);

    }
`;

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid rgba(0 , 0 , 0 ,0);
  border-top-color: #ff00cc;
  border-bottom-color: #333399;
  animation-name: ${breatheAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const InnerSpinner = styled.div`
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid rgba(0 , 0 , 0 ,0);
  border-right-color: #8600ff;
  border-left-color: #00b9ff;
  animation-name: ${breatheAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
