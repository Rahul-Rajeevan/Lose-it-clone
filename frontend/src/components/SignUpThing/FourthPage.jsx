import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
const FourthPage = () => {
  const [signup, setSignup] = useState({
    email: "",
    password: "",
  });
  const [state, setState] = useState("Signup");
  const navigate = useNavigate();

  const onChangeInput = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };
  // http://localhost:8080/user/signup
  const handleClick = () => {
    if (signup.email && signup.password) {
      setState("Loading...");

      return axios
        .post("http://localhost:8080/user/signup", signup)
        .then(() => {
          alert("Signup Successfull");
        })
        .then(() => {
          navigate("/login");
        })
        .catch(() => {
          alert("SignUp Failed Try Again!!!");
        });
      } else {
        alert("No data is found , please write data")

    }

    setTimeout(() => {
      setState("Signup");
    }, 2000);
  };
  return (
    <Container>
      <IMGContainer />
      <InsideContainer>
        <Box1>
          <Heading>Create an account to save your plan</Heading>
        </Box1>
        <Box2>
          <InputBox
            placeholder="Your Name"
            name="username"
            required
            // onChange={(e) => {
            //   onChangeInput(e);
            // }}
          />
        </Box2>
        <Box2>
          <InputBox
            placeholder="Email"
            name="email"
            required
            type="email"
            onChange={onChangeInput}
          />
        </Box2>
        <Box2>
          <InputBox
            placeholder="Password"
            type="password"
            name="password"
            onChange={onChangeInput}
            required
          />
        </Box2>
        <Box2>
          <InputBox placeholder="Confirm Password" type="password" required />
        </Box2>

        <ButtonBox onClick={handleClick}>{state}</ButtonBox>
      </InsideContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 99.7%;
  height: 100vh;
  /* border: 3px solid black; */
  margin-top: 0px;
  position: relative;
`;

const IMGContainer = styled.img`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-image: url("https://assets.loseit.com/website/onboarding/Wave.svg");
  object-fit: cover;
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 0;
  background-position: bottom center;
`;

const InsideContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 410px;
  margin-left: 70px;
  display: flex;
  /* border: 2px solid black; */
  width: 35%;
  height: 600px;
  display: flex;
  flex-direction: column;
  /* z-index: 100; */
  background-color: whitesmoke;
`;

const Heading = styled.div`
  flex: 1;
  color: #173962;
  font-size: 29px;
  font-weight: 900;
  padding: 20px 0;
  text-align: center;
`;

const Box1 = styled.div`
  flex: 1;
  /* border: 2px solid black; */
  display: flex;
  flex-direction: column;
`;
const Box2 = styled.div`
  flex: 0.5;
  width: 50%;
  margin: auto;
  /* border: 2px solid black; */
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.input`
  align-items: center;
  text-align: center;
  padding: 12px 10px;
`;

const ButtonBox = styled.button`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  padding: 12px 12px;
  background-color: #f7941d;
  z-index: 1.4;
  width: 20%;
  font-size: 20px;
  /* font-weight: 600; */
  margin: auto;
  color: #173962;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;
export default FourthPage;
