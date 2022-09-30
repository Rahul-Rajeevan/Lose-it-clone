import { Button, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/cbtcss.css";

// import "../css/carousal.css";
import { Pagination, Navigation } from "swiper";
import dining from "../Assets/dining.webp";
import Eating from "../Assets/Eating.webp";
import nightfruit from "../Assets/nightfruit.webp";
import protin from "../Assets/protin.webp";
import run from "../Assets/run.webp";
import tips from "../Assets/tips.webp";
import veg from "../Assets/veg.webp";
import waterice from "../Assets/waterice.webp";
import weight from "../Assets/weight.webp";
const data = [
  {
    id: 1,
    src: dining,
    story: "10 Tips For Making Healthier Choices When Dining Out",
  },
  {
    id: 2,
    src: Eating,
    story: "The Secret Behind Intuitive Eating",
  },
  {
    id: 3,
    src: nightfruit,
    story: "Seven Strategies for A Better Night’s Sleep",
  },
  {
    id: 4,
    src: protin,
    story: "12 Protein-Packed Snacks to Curb Hunger Quick",
  },
  {
    id: 5,
    src: run,
    story: "Fun 20-Minute Treadmill Workouts",
  },
  {
    id: 6,
    src: tips,
    story: "Quick Tips to Make Healthier Decisions, According to Science",
  },
  {
    id: 7,
    src: veg,
    story: "Setting Macronutrient Goals – How Many Macros Do You Need?",
  },
  {
    id: 8,
    src: waterice,
    story: "Is Drinking Seltzer Actually Healthy?",
  },
  {
    id: 9,
    src: weight,
    story: "5 Ways You’re Sabotaging Your Weight Loss",
  },
];

const CarusalSecond = () => {
  return (
    <VStack p="50px">
      <Text color="#183962" fontSize="2em" w="100%" textAlign="center">
        A Balanced Approach to Weight Loss
      </Text>
      <Text
        fontSize="1.3em"
        color="#808284"
        fontWeight="400"
        textAlign="center"
        w="100%"
      >
        Get motivated with these nutrition and wellness tips and user success
        stories!
      </Text>
      <VStack w="100%" bg="white" p="50px">
        <div
          style={{
            width: "100%",
            //   height: "90%",
            display: "flex",
            justifyContent: "space-around",
            //   border: "2px solid black",
            height: "340px",
            backgroundColor: "white",
            marginBottom: "20px",
          }}
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            slidesPerGroup={3}
            loop={false}
            loopFillGroupWithBlank={false}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              240: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              642: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              840: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {data.map((datas) => (
              <>
                <SwiperSlide
                  style={{ height: "220px", width: "40%" }}
                  key={datas.id}
                >
                  {/* <VStack h="100%" p="40px"> */}
                  <Image src={datas.src} alt={datas.src} height="100%" />
                  <Text
                    color="#808284"
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="500"
                    p="20px"
                  >
                    {datas.story}
                  </Text>
                  {/* </VStack> */}
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
        <Button
          bg="#183962"
          color="white"
          p="20px"
          _hover={{
            bg: "#183962",
            opacity: 0.8,
          }}
        >
          Get Weight Loss Tips
        </Button>
      </VStack>
    </VStack>
  );
};

export default CarusalSecond;
