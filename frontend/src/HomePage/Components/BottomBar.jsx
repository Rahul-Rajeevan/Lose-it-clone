import { Button, Stack, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
const BottomBar = () => {
  const [not760] = useMediaQuery("(min-width: 760px)");
  return (
    <Stack
      w="100%"
      alignItems="center"
      position="fixed"
      bottom="0"
      zIndex="20"
      bg="#fff"
    >
      <NavLink to="/signup">
        <Button
          w="auto"
          color="white"
          bg="#183962"
          h="60px"
          fontSize="20px"
          fontWeight="500"
          m="20px auto"
          p="15px 30px"
          borderRadius=".25rem"
          letterSpacing="1px"
          textAlign="center"
          cursor="pointer"
        >
          Sign Up for Free
        </Button>
      </NavLink>
    </Stack>
  );
};

export default BottomBar;
