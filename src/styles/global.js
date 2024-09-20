import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset and global styles */
  * {
    margin: 0;
    padding: 0;
    &::before, &::after {
      box-sizing: inherit;
    }
  }
  body {
    font-family: 'Inter', sans-serif;
    background: #7945FF;
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
  img, svg {
    display: block;
    max-width: 100%;
  }
`;
