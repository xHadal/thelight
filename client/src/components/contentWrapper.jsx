import React, { Component } from 'react';

import styled from 'styled-components';


const StyledContentWrapper = styled.div`
  
    align-items: center;
    display: flex;
    flex-basis: 50%;
    justify-content: center;
    transition: all 0.5s; 
    flex-direction: column;

  &.bg{
    background: #ff4b7d;
    color: #fff;
    font-size: 25px;
    font-weight: bold;
  }
  
`;

const ContentWrapper = ({ bgColor, children}) => {
  { console.log('bgColor',bgColor) }
  return (
    <StyledContentWrapper className={bgColor && 'bg'}>
      {children}
    </StyledContentWrapper>
  )
}

export default ContentWrapper;