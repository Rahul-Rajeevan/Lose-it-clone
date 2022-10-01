import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FirstPage = () => {
  return (
    <Container>
      <IMGContainer></IMGContainer>
      <InsideContainer>
        <Container1>
          <Top1>Take the first step towards a healthier you with Lose It!</Top1>
          <Top2>
            <ImageContainer>
              <Image
                src="https://assets.loseit.com/website/onboarding/SetGoal.svg"
                width="100px"
              />
            </ImageContainer>
            <ImageContainer>
              <Image
                src="https://assets.loseit.com/website/onboarding/TrackFoods.svg"
                width="100px"
              />
            </ImageContainer>
            <ImageContainer>
              <Image
                src="https://assets.loseit.com/website/onboarding/LoseWeight.svg"
                width="100px"
              />
            </ImageContainer>
            <Image />
            <Image src="" />
          </Top2>
        </Container1>
        <Container2>
          <Container2Inside>
            <Heading>Have you counted calories before?</Heading>
            <Heading></Heading>
            <Link to="/enterdatas">
            <Button>Yes</Button>
            </Link >
            <Link to="/enterdatas">
            <Button>No</Button>
            </Link>
          </Container2Inside>
        </Container2>
      </InsideContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 99.7%;
  height: 90vh;
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
  top: 40px;
  left: 62px;

  margin-left: 70px;
  display: flex;
  /* border: 2px solid black; */
  width: 80%;
  height: 450px;
  display: flex;
  /* z-index: 100; */
`;

const Container1 = styled.div`
  flex: 1;
  /* border: 3px solid red; */
  display: flex;
  flex-direction: column;
`;
const Top1 = styled.div`
  flex: 0.5;
  width: 80%;
  font-size: 28px;
  font-weight: 1000;
  text-align: center;
  line-height: 2.5;
  color: #f7941d;
  margin: auto;
`;
const Top2 = styled.div`
  flex: 1;
  display: flex;
`;

const ImageContainer = styled.div`
  background-color: white;
  flex: 1;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  /* width: 100%; */
  margin: auto;
  object-fit: cover;
`;

const Container2 = styled.div`
  flex: 1;
  /* border: 3px solid red; */
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container2Inside = styled.div`
  /* border: 2px solid black; */
  width: 60%;
`;
const Heading = styled.p`
  font-size: 28px;
  font-weight: 1000;
  text-align: center;
  line-height: 1.5;
  color: #f7941d;
`;

const Button = styled.button`
  width: 70%;
  background-color: #ff9400;
  color: #fcfafa;
  padding: 11px;
  margin-top: 8px;
  margin-left: 50px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  border-radius: 14px;
`;

export default FirstPage;
