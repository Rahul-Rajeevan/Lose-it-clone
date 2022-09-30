import React from "react";
import AppSection from "./Components/AppSection";
import LpNavbar from "./Components/LpNavbar";
import LpTop from "./Components/LpTop";
import WaightEasy from "./Components/WaightEasy";
// import AppSection from "../HomePage/Components/AppSection";
// import WaightEasy from "../HomePage/Components/WaightEasy";
const Homepage = () => {
  return (
    <>
      <LpTop />
      <LpNavbar />
      <AppSection />
      <WaightEasy />
    </>
  );
};

export default Homepage;
