import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      타이틀 후보 : 불꽃남녀, RunningMan, BurnningFat, DailyTrainning
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1150px;
  height: 100px;
  background-color: salmon;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xx-large;
`;
