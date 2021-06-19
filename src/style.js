import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f0f0;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 1px);
`;

export const Main = styled.div`
  max-width: 1200px;
  min-width: 700px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  box-shadow: -1px 4px 42px -6px rgba(43,43,43,0.64);
`;

export const Page = styled.div`
  padding: 2rem;
  flex-grow: 1;

  /* background-color: #f0f0f0; */
`;