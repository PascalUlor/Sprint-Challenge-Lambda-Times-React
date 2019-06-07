import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const H1 = styled.h1`
font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const SpanDate = styled.span`
align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;

  margin-left: 25px;
  flex: 1;
`;

const SpanTemp = styled.span`
align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const Header = () => {
  return (
    <HeaderStyle /*className="header"*/>
      <SpanDate /*className="date"*/>SMARCH 32, 2018</SpanDate>
      <H1>Lambda Times</H1>
      <SpanTemp /*className="temp"*/>98°</SpanTemp>
    </HeaderStyle>
  )
}

export default Header