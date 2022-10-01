import { HStack, Image, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";
import style from "../css/footer.module.css";

const Footer = () => {
  const [not976] = useMediaQuery("(min-width: 976px)");
  const [not903] = useMediaQuery("(min-width: 903px)");
  const [not788] = useMediaQuery("(min-width: 788px)");
  const [not760] = useMediaQuery("(min-width: 760px)");
  const data = [
    {
      id: 1,
      title: "Member Resources",
      link1: "How It Works",
      link1src: "#",
      link2: "Premium",
      link2src: "#",
      link3: "Lose It! Blog",
      link3src: "#",
      link4: "Help Center",
      link4src: "#",
    },
    {
      id: 2,
      title: "Connect With Us",
      link1: "Press & Media Kit",
      link1src: "#",
      link2: "Contact Us",
      link2src: "#",
      link3: "Partners & API",
      link3src: "#",
      link4: "Share Your Story",
      link4src: "#",
    },
    {
      id: 3,
      title: "Our Team",
      link1: "About Us",
      link1src: "#",
      link2: "Careers",
      link2src: "#",
      link3: "Diversity",
      link3src: "#",
    },
  ];
  return (
    <HStack w="100%" h="400px" bg="#183962">
      {not760 ? (
        <>
          <VStack w={not903 ? "30%" : "20%"} h="80%" p="45px">
            <Image
              src="https://assets.loseit.com/website/home/Footer_WhiteKnockOutLogo.svg"
              h="30px"
            />
          </VStack>
          <VStack
            w={not903 ? "70%" : "80%"}
            h="80%"
            p={not788 ? "45px 45px 0 45px" : "45px 0 0 0"}
          >
            <HStack gap="30px" w="100%" justifyContent="center">
              {data.map((notes) => (
                <VStack w={not976 ? "26%" : "40%"}>
                  <Text
                    h="15px"
                    fontSize="16px"
                    fontWeight="800"
                    color="#fff"
                    textAlign="left"
                    w="100%"
                  >
                    {notes.title}
                  </Text>
                  <a href="#" className={style.linkcss}>
                    <Text
                      h="15px"
                      fontWeight="400"
                      fontSize="16px"
                      color="#fff"
                      _hover={{
                        color: "#ff9400",
                      }}
                      textAlign="left"
                      w="100%"
                    >
                      {notes.link1}
                    </Text>
                  </a>

                  <a href="#" className={style.linkcss}>
                    <Text
                      h="15px"
                      fontWeight="400"
                      fontSize="16px"
                      color="#fff"
                      _hover={{
                        color: "#ff9400",
                      }}
                      textAlign="left"
                      w="100%"
                    >
                      {notes.link2}
                    </Text>
                  </a>
                  <a href="#" className={style.linkcss}>
                    <Text
                      h="15px"
                      fontWeight="400"
                      fontSize="16px"
                      color="#fff"
                      _hover={{
                        color: "#ff9400",
                      }}
                      textAlign="left"
                      w="100%"
                    >
                      {notes.link3}
                    </Text>
                  </a>
                  <a href="#" className={style.linkcss}>
                    <Text
                      h="15px"
                      fontWeight="400"
                      fontSize="16px"
                      color="#fff"
                      _hover={{
                        color: "#ff9400",
                      }}
                      textAlign="left"
                      w="100%"
                    >
                      {notes.link4}
                    </Text>
                  </a>
                </VStack>
              ))}
            </HStack>
            <HStack
              // border="2px solid red"
              w="70%"
              justifyContent="center"
              // h="350px"
              pt="60px"
              pb="10px"
              // fontSize="25px"
              className={style.socialicon}
            >
              <a href="#">
                <FaFacebookSquare />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaPinterest />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </HStack>
            <Text color="#fff">
              Copyright 2008-2021 FitNow, Inc, All Rights Reserved
            </Text>
            <HStack className={style.termscss}>
              <a href="#">Privacy</a>
              <i> | </i>
              <a href="#">Terms of Service</a>
            </HStack>
          </VStack>
        </>
      ) : (
        <VStack
          border="2px solid yellow"
          h="100%"
          w="100%"
          p="40px"
          className={style.mobilelink}
          gap="0px"
        >
          <Image
            src="https://assets.loseit.com/website/home/Footer_WhiteKnockOutLogo.svg"
            h="30px"
          />
          <a href="#"></a>
          <a href="#">How It Works</a>
          <a href="#">Premium</a>
          <a href="#">Help Center</a>
          <a href="#">Lose It! Blog</a>
          <a href="#">Careers</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </VStack>
      )}
    </HStack>
  );
};

export default Footer;
