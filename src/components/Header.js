import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  background-color: #3f51b5;

  color: white;
`;

const Content = styled.div`
  max-width: 1200px;
  min-width: 700px;
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;;
`


const Header = ({ children }) => {
  return (
    <Wrapper>
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
}

export default Header;
