import React from "react";
import styled from "styled-components";

const ThirdPage = () => {
  return (
    <Container>
      <IMGContainer />
      <InsideContainer>
        <Heading>Your personal weight loss plan is ready.</Heading>
        <Box>
          <Box1>
            <BoxLeft>
              <Image src="https://assets.loseit.com/website/onboarding/PlanWatermelon.svg" />
            </BoxLeft>
            <BoxRight>
              <Right1>Daily calorie budget:</Right1>
              <Right1>
                <Heading2>3765 Calories</Heading2>
              </Right1>
            </BoxRight>
          </Box1>
          <Box1>
            <BoxLeft>
              <Image src="https://assets.loseit.com/website/onboarding/PlanAward.svg" />
            </BoxLeft>
            <BoxRight>
              <Right1>Total weight loss:</Right1>
              <Right1>
                <Heading2>3765 Calories</Heading2>
              </Right1>
            </BoxRight>
          </Box1>
          <Box1>
            <BoxLeft>
              <Image src="https://assets.loseit.com/website/onboarding/PlanCalendar.svg" />
            </BoxLeft>
            <BoxRight>
              <Right1>Weekly weight loss</Right1>
              <Right1>
                <Heading2>3765 Calories</Heading2>
              </Right1>
            </BoxRight>
          </Box1>
          <Box1>
            <BoxLeft>
              <Image src="https://assets.loseit.com/website/onboarding/PlanStar.svg" />
            </BoxLeft>
            <BoxRight>
              <Right1>Goal date:</Right1>
              <Right1>
                <Heading2>3765 Calories</Heading2>
              </Right1>
            </BoxRight>
          </Box1>
        </Box>
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
  top: 50px;
  left: 410px;
  margin-left: 70px;
  display: flex;
  /* border: 2px solid black; */
  width: 33%;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
`;

const Heading = styled.div`
  flex: 1;
  color: #173962;
  font-size: 24px;
  font-weight: 900;
  padding: 20px 0;
  text-align: center;
`;

const Box = styled.div`
  /* border: 1px solid black; */
  width: 50%;
  height: 350px;
  margin: auto;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

const Box1 = styled.div`
  flex: 1;
  /* border: 1px dotted red; */
  display: flex;
`;

const BoxLeft = styled.div`
  flex: 1;
  /* border: 1px solid blue; */
`;
const BoxRight = styled.div`
  flex: 3;
  /* border: 4px solid teal; */
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Right1 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heading1 = styled.p`
  font-size: 10px;
`;
const Heading2 = styled.p`
  font-size: 18px;
  padding-left: 5px;
  font-weight: 500;
`;

export default ThirdPage;
