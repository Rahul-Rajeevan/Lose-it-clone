import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <TopLogo src="https://assets.loseit.com/website/corporate/LoseIt_Logo_NoTagline_FullColor.svg" />
  );
};


const TopLogo = styled.img`
/* border: 2px solid black; */
 margin-left: 0px;
 width: 18%;
 height: 90px;
 margin-bottom: 0px;
`;

export default Logo;
