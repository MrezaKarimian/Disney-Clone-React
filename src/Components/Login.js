import React from "react";
import styled from "styled-components";
import BackgroundSrc from "../public/images/login-background.jpg";
import LogoOneSrc from "../public/images/cta-logo-one.svg";
import LogoTwoSrc from "../public/images/cta-logo-two.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { setUserLogin } from "features/user/userSlice";
import { useHistory } from "react-router-dom";

function Login(props) {
  console.log(props.signOut);
  const dispatch = useDispatch();
  const history = useHistory();

  const signIn = async (event) => {
    event.preventDefault();
    dispatch(setUserLogin({ name: "", email: "", photo: "" }));
    await signInWithPopup(auth, provider)
      .then((result) => {
        let user = result.user;
        console.log(user);
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
          })
        );
        history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Content>
        <LogoOne src={LogoOneSrc} alt="" />
        <SignupBtn onClick={signIn}>sign in</SignupBtn>
        <Description>
          Pariatur irure deserunt esse do non eu aute. Minim ex exercitation
          mollit deserunt eu labore est ullamco magna in. In aute incididunt
          duis ullamco et cillum ea amet ullamco.
        </Description>
        <LogoTwo src={LogoTwoSrc} alt="" />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(${BackgroundSrc}) center center / cover no-repeat fixed;
    background-position: top;
    opacity: 0.7;
    z-index: -1;
  }
`;

const Content = styled.div`
  max-width: 800px;
  padding: 80px 40px;
`;

const LogoOne = styled.img`
  padding: 30px 0;
  width: 100%;
`;

const LogoTwo = styled.img`
  width: 100%;
  padding: 30px 0;
`;

const SignupBtn = styled.a`
  width: 100%;
  background-color: #0063e5;
  display: flex;
  justify-content: center;
  font-weight: bold;
  margin: 0 auto;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  transform: all 250ms;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
