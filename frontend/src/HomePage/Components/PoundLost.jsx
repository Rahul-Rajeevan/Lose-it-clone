import { HStack, Image, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import React from "react";
import Ticker_Celebratory from "../Assets/Ticker_Celebratory.svg";
import WomensHealth from "../Assets/WomensHealth.png";
import TodayShow from "../Assets/TodayShow.png";
import GoodMorningAmerica from "../Assets/GoodMorningAmerica.png";
import Feature_People from "../Assets/Feature_People.png";
const PoundLost = () => {
  const [not650] = useMediaQuery("(min-width: 650px)");
  return (
    <VStack w="100%" p="50px">
      <Image src={Ticker_Celebratory} alt="Ticker_Celebratory" w="200px" />
      <Text
        color="#ff9400"
        fontSize={not650 ? "6.5em" : "4.5em"}
        fontWeight="700"
      >
        124,234,560
      </Text>
      <Text
        color="#455555"
        fontSize={not650 ? "2em" : "1.4em"}
        fontWeight="700"
        letterSpacing=".4em"
      >
        POUNDS LOST
      </Text>
      <hr
        style={{
          border: "5px solid #ff9400",
          width: "40px",
          marginBottom: "40px",
          marginTop: "1rem",
        }}
      />
      <Text fontSize="1.5em" fontWeight="500" lineHeight="1.2">
        AS SEEN ON
      </Text>
      {not650 ? (
        <HStack justify="space-evenly" w="100%" pt="20px">
          <Image h="40px" w="140px" src={TodayShow} />
          <Image h="70px" w="150px" src={Feature_People} />
          <Image h="80px" w="140px" src={GoodMorningAmerica} />
          <Image h="50px" w="160px" src={WomensHealth} />
        </HStack>
      ) : (
        <VStack w="100%" pt="20px" gap="20px">
          <Image h="40px" w="140px" src={TodayShow} />
          <Image h="70px" w="150px" src={Feature_People} />
          <Image h="80px" w="140px" src={GoodMorningAmerica} />
          <Image h="50px" w="160px" src={WomensHealth} />
        </VStack>
      )}
    </VStack>
  );
};

export default PoundLost;
