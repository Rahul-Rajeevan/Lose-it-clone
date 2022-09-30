import {
  Box,
  HStack,
  Image,
  Text,
  useMediaQuery,
  VStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar, AiFillAndroid, AiFillApple } from "react-icons/ai";
import style from "../Components/Appsection.module.css";
import mobile from "../Assets/mobile.png";
import { NavLink } from "react-router-dom";
const AppSection = () => {
  const [not1096] = useMediaQuery("(min-width: 1096px)");
  const [not778] = useMediaQuery("(min-width: 778px)");
  return (
    <Box>
      <VStack w="100%">
        <HStack w="100%">
          {not778 ? (
            <HStack
              display="flex"
              justifyContent="space-between"
              // border="2px solid green"
              w="100%"
              className={style.sectionA}
            >
              <Box
                w="35%"
                display="flex"
                alignItems="center"
                justifyContent="end"
                className={not778 ? style.leftImage : style.centerImage}
                //   border="3px solid blue"
              >
                <Image src={mobile} h="500px" />
              </Box>
              <Box w="55%" h="500px">
                <Text className={not1096 ? style.big : style.small}>
                  Top Rated Weight Loss Plan
                </Text>
                <Text
                  fontSize="20px"
                  color="#455555"
                  fontWeight="400"
                  mb="30px"
                >
                  Track the foods you love and lose weight
                </Text>
                <NavLink to="/signup">
                  <Button
                    bg="#183962"
                    color="white"
                    pt="15px"
                    pb="15px"
                    pl="30px"
                    pr="30px"
                    _hover={{
                      opacity: 0.8,
                      color: "white",
                    }}
                    mb="30px"
                  >
                    Sign up for free
                  </Button>
                </NavLink>

                <HStack w="100%">
                  <HStack display="flex" alignItems="center">
                    <AiFillApple
                      size="40px"
                      color="grey"
                      _hover={{
                        color: "red",
                      }}
                    />
                    <AiFillStar size="30px" color="#fed206" />
                    <AiFillStar size="30px" color="#fed206" />
                    <AiFillStar size="30px" color="#fed206" />
                    <AiFillStar size="30px" color="#fed206" />
                  </HStack>
                  <HStack display="flex" alignItems="center" pl="40px">
                    <AiFillAndroid size="40px" color="grey" />
                    <AiFillStar size="30px" color="#fed206" />
                    <AiFillStar size="30px" color="#fed206" />
                    <AiFillStar size="30px" color="#fed206" />
                    <AiFillStar size="30px" color="#fed206" />
                  </HStack>
                </HStack>
              </Box>
            </HStack>
          ) : (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              w="100%"
              alignItems="center"
              marginBottom="20px"
              className={style.sectionB}
            >
              <Text className={not1096 ? style.big : style.small}>
                Top Rated Weight Loss Plan
              </Text>
              <Text fontSize="20px" color="#455555" fontWeight="400" mb="30px">
                Track the foods you love and lose weight
              </Text>
              <HStack w="100%" display="flex" justifyContent="center">
                <HStack display="flex" alignItems="center">
                  <AiFillApple
                    size="40px"
                    color="grey"
                    _hover={{
                      color: "red",
                    }}
                  />
                  <AiFillStar size="30px" color="#fed206" />
                  <AiFillStar size="30px" color="#fed206" />
                  <AiFillStar size="30px" color="#fed206" />
                  <AiFillStar size="30px" color="#fed206" />
                </HStack>
                <HStack display="flex" alignItems="center" pl="40px">
                  <AiFillAndroid size="40px" color="grey" />
                  <AiFillStar size="30px" color="#fed206" />
                  <AiFillStar size="30px" color="#fed206" />
                  <AiFillStar size="30px" color="#fed206" />
                  <AiFillStar size="30px" color="#fed206" />
                </HStack>
              </HStack>
              <Box
                w="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mt="45px"
                //   className={not778 ? style.leftImage : style.centerImage}
              >
                <Image src={mobile} h="500px" />
              </Box>
            </Box>
          )}
        </HStack>
      </VStack>
    </Box>
  );
};

export default AppSection;
