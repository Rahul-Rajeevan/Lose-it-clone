import { Button, HStack, Image, useMediaQuery, VStack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import loseitLogo from "../Assets/loseitLogo.svg";

const LpNavbar = () => {
  const [isMobileScreen] = useMediaQuery("(min-width: 720px)");
  return (
    <>
      {isMobileScreen ? (
        <HStack justifyContent="space-between" p="20px">
          <NavLink to="/">
            <Image
              src={loseitLogo}
              w="200px"
              h="80px"
              _hover={{
                opacity: "0.8",
              }}
            />
          </NavLink>
          <NavLink to="/login">
            <Button
              bg="#ff9400"
              fontSize="1em"
              fontWeight="400"
              textAlign="center"
              p="10px, 40px"
              w="119px"
              h="41px"
              color="white"
              _hover={{
                opacity: 0.8,
              }}
            >
              Login
            </Button>
          </NavLink>
        </HStack>
      ) : (
        <VStack mt="15px">
          <NavLink to="/">
            <Image
              src={loseitLogo}
              w="200px"
              h="80px"
              _hover={{
                opacity: "0.8",
              }}
            />
          </NavLink>
        </VStack>
      )}
    </>
  );
};

export default LpNavbar;
