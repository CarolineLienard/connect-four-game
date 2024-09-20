import { createGlobalStyle } from "styled-components";
import Grotesk from "../assets/fonts/grotesk.ttf";
import { colors } from "./theme";

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
    background: ${colors.purple800};
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
  img, svg {
    display: block;
    max-width: 100%;
  }
`;
