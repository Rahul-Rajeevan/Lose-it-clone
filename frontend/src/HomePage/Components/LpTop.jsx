import { Box, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import React from "react";
import style from "../Components/Appsection.module.css";

const LpTop = () => {
  const [not778] = useMediaQuery("(min-width: 778px)");
  return (
    <VStack w="100%" bg="#85E0FF" p="10px">
      <a href="https://loseit.com/jobs/" target="_blank">
        <Text
          _hover={{
            color: "#0056b3",
          }}
          className={not778 ? style.bigtop : style.smalltop}
        >
          Lose It! is hiring! Click here to see our open positions.
        </Text>
      </a>
    </VStack>
  );
};

export default LpTop;
