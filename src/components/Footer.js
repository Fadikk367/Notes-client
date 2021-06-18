import React from 'react';
import styled from 'styled-components';

const Wrapper =  styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #3f51b5;

  max-width: 1200px;
  width: 1200px;
  margin: 0 auto;
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
