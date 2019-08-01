import React, { Component } from 'react';

import styled from 'styled-components';


const StyledMainWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  min-height: 100%;
`;

const MainWrapper = ({children}) => {
  return (
    <StyledMainWrapper>
      {children}
    </StyledMainWrapper>
  )
}

export default MainWrapper;