import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import style from "../Components/Appsection.module.css";
import AppleLogo from "../Assets/AppleLogo.svg";
import GooglePlay from "../Assets/GooglePlay.svg";
import { NavLink } from "react-router-dom";
const AppDownload = () => {
  return (
    <>
      <Box className={style.appdown}>
        <Text
          color="#ff9400"
          fontSize="1.5em"
          fontWeight="500"
          textAlign="center"
        >
          Get Started on Mobile
        </Text>
        <HStack display="flex" justifyContent="center" gap="20px" p="60px">
          <a
            href="https://apps.apple.com/app/lose-it/id297368629"
            target="_blank"
          >
            <Image src={AppleLogo} h="60px" w="180px" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.fitnow.loseit&"
            target="_blank"
          >
            <Image src={GooglePlay} h="60px" w="180px" />
          </a>
        </HStack>
      </Box>
    </>
  );
};

export default AppDownload;
