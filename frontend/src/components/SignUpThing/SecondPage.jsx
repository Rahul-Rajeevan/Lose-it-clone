import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SecondPage = () => {
  const [weight, setWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [height, setHeight] = useState("");

  const navigate = useNavigate();

  const handleWeight = () => {
    if (!weight) {
      alert("Please enter your weight");
      return false;
    }
    if (!goalWeight) {
      alert("Please enter your Goal Weight");
      return false;
    }
    if (!height) {
      alert("Please enter your height");
      return false;
    } else {
      localStorage.setItem("weight", JSON.stringify(weight));
      navigate("/caloriedata");
    }
  };

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
            <InputBox
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) =>
                typeof e.target.value === "number"
                  ? alert("Please enter Numeric")
                  : setWeight(e.target.value)
              }
            />
            <InputBox placeholder="kg" value="kg" />
          </InputContainer>
        </Box1>
        <Box1>
          <Heading>Goal Weight</Heading>
          <InputContainer>
            <InputBox
              type="number"
              placeholder="Enter your Goal weight"
              value={goalWeight}
              onChange={(e) =>
                typeof e.target.value === "number"
                  ? alert("Please enter Numeric")
                  : setGoalWeight(e.target.value)
              }
            />
            <InputBox placeholder="kg" value="kg" />
          </InputContainer>
        </Box1>
        <Box1>
          <Heading>Enter your height</Heading>
          <InputContainer>
            <InputBox
              type="number"
              placeholder="Enter your Height(cm)"
              value={height}
              onChange={(e) =>
                typeof e.target.value === "number"
                  ? alert("Please enter Numeric")
                  : setHeight(e.target.value)
              }
            />
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
          {/* <Link to="/caloriedata"> */}
          <ButtonBox onClick={handleWeight}>Continue</ButtonBox>
          {/* </Link> */}
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
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  border: 2px solid #173962;
`;

export default SecondPage;
