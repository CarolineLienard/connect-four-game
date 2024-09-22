import { createGlobalStyle } from "styled-components";
import Grotesk from "../assets/fonts/grotesk.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Grotesk";
    src: url(${Grotesk});
  }
  /* CSS Reset and global styles */
  * {
    margin: 0;
    padding: 0;    
    &::before, &::after {
      box-sizing: inherit;
    }
  }
  body {
    font-family: 'Grotesk', sans-serif;
  }
  img, svg {
    display: block;
    max-width: 100%;
  }
`;
