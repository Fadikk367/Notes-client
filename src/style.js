import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Page = styled.div`
  max-width: 1200px;
  width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  flex-grow: 1;

  background-color: #f0f0f0;
`;