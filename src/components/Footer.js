import React from 'react';
import styled from 'styled-components';

const Wrapper =  styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #3f51b5;
  width: 100%;
  color: white;
`;


const Footer = () => {
  return (
    <Wrapper>
      <span>WFiIS-BD2-2021</span>
      <span>Adrian Furman</span>
    </Wrapper>
  )
}

export default Footer;
