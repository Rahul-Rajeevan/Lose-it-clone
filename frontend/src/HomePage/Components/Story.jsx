import {
  Button,
  HStack,
  Image,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Boy from "../Assets/Boy.png";
import Girl from "../Assets/Girl.png";
const Story = () => {
  // const [not670] = useMediaQuery("(min-width:670px)");
  const [not650] = useMediaQuery("(min-width: 670px)");
  return (
    <VStack bg="#183962" w="100%" p="50px">
      <Text color="white" fontSize="2em" textAlign="center">
        Advice from Successful Members
      </Text>
      <Stack
        p="20px"
        display="flex"
        flexDirection={not650 ? "row" : "column"}
        gap={not650 ? "20px" : "0px"}
      >
        <VStack>
          <Image src={Girl} h="200px" />
          <Text
            textAlign="center"
            color="#ffa600"
            fontSize="1.1em"
            fontWeight="500"
            w="75%"
          >
            Track every single bite you take. You need to know how you’re doing
            before dinner. If you don’t, things can get away from you fast."
          </Text>
          <Text color="white" fontSize="11px">
            - Carla, 65 lbs lost without giving up pizza.
          </Text>
        </VStack>
        <VStack>
          <Image src={Boy} h="200px" />
          <Text
            textAlign="center"
            color="#ffa600"
            fontSize="1.1em"
            fontWeight="500"
            w="75%"
          >
            Everyday is a battle, and you have to make the choice each morning
            to fight for your health and wellness"
          </Text>
          <Text color="white" fontSize="11px">
            - Alex, lost 85 lbs for his wedding.
          </Text>
        </VStack>
      </Stack>
      <Button
        bg="#ff9400"
        fontWeight="400"
        color="white"
        margin="20px"
        textAlign="center"
        fontSize="1em"
        _hover={{
          bg: "#ff9400",
          opacity: "0.8",
        }}
        pt="10px"
        pb="10px"
        pr="40px"
        pl="40px"
      >
        Share Your Story
      </Button>
    </VStack>
  );
};

export default Story;
