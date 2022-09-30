import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import AppDownload from "./Components/AppDownload";
import AppSection from "./Components/AppSection";
import BottomBar from "./Components/BottomBar";
import CarousalFirst from "./Components/CarousalFirst";
import CarusalSecond from "./Components/CarusalSecond";
import Footer from "./Components/Footer";
import LpNavbar from "./Components/LpNavbar";
import LpTop from "./Components/LpTop";
import PoundLost from "./Components/PoundLost";
import Story from "./Components/Story";
import WaightEasy from "./Components/WaightEasy";

const Homepage = () => {
  const [not760] = useMediaQuery("(min-width: 760px)");
  return (
    <>
      <LpTop />
      <LpNavbar />
      <AppSection />
      <WaightEasy />
      <CarousalFirst />
      <PoundLost />
      <Story />
      <CarusalSecond />
      <AppDownload />
      <Footer />
      {not760 ? <></> : <BottomBar />}
    </>
  );
};

export default Homepage;
