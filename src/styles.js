import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
    box-sizing: border-box; 
    color: #000;
    background-color: #FBFCF8;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialised; 
 }
 `;

export const PageContainer = styled.section`
  max-width: 1000px;
  margin: 0 auto;
`;
