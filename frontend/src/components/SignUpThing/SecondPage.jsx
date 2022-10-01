import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SecondPage = () => {
  return (
    <Container>
      <IMGContainer />
      <InsideContainer>
        <Box1>
          <Heading>
            Calorie counting comes down to simple math. Just follow a calorie
            budget to eat less than you burn and lose weight. Let's find your
            calorie budget now.
          </Heading>
        </Box1>
        <Box1>
          <Heading>Current Weight</Heading>
          <InputContainer>
            <InputBox type="number" placeholder="Enter your weight" />
            <InputBox placeholder="kg" value="kg" />
          </InputContainer>
        </Box1>
        <Box1>
          <Heading>Goal Weight</Heading>
          <InputContainer>
            <InputBox type="number" placeholder="Enter your Goal weight" />
            <InputBox placeholder="kg" value="kg" />
          </InputContainer>
        </Box1>
        <Box1>
          <Heading>Enter your height</Heading>
          <InputContainer>
            <InputBox type="number" placeholder="Enter your Height(cm)" />
          </InputContainer>
        </Box1>
        <Box1>
          <Heading>Select your biological sex</Heading>

          <div style={{ display: "flex" }}>
            <ButtonBox> Male</ButtonBox>
            <ButtonBox>Female</ButtonBox>
          </div>
        </Box1>
        <Box1>
          <Link to="/caloriedata">
            <ButtonBox>Continue</ButtonBox>
          </Link>
        </Box1>
      </InsideContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 99.7%;
  height: 110vh;
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
  left: 380px;
  margin-left: 70px;
  display: flex;
  /* border: 2px solid black; */
  width: 40%;
  height: 630px;
  display: flex;
  flex-direction: column;
  /* z-index: 100; */
  background-color: whitesmoke;
`;
const Box1 = styled.div`
  flex: 1;
  /* border: 2px solid black; */
  display: flex;
  flex-direction: column;
`;
const Heading = styled.div`
  flex: 1;
  color: #173962;
  font-size: 24px;
  font-weight: 900;
  padding: 20px 0;
  text-align: center;
`;
const InputContainer = styled.div`
  display: flex;
  flex: 4;
  justify-content: space-around;
  border: none;
  /* border: 1px solid red; */
`;

const InputBox = styled.input`
  align-items: center;
  text-align: center;
`;
const ButtonBox = styled.button`
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  padding: 12px 12px;
  background-color: #f7941d;
  z-index: 1.4;
  width: 20%;
  font-size: 20px;
  font-weight: 600;
  margin: auto;
  color: #173962;
  display: flex;
  text-align: center;
`;

export default SecondPage;
