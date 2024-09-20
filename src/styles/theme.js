import styled, { css } from "styled-components";

// Responsive
const Breakpoints = {
  mobile: "375px",
  tablet: "700px",
};

export const mediaQuery = (breakpoint) => `
  @media (min-width: ${Breakpoints[breakpoint]})
`;

// Colors
export const colors = {
  black: "#000000",
  purple800: "#5C2DD5",
  purple700: "#7945FF",
  red: "#FD6687",
  yellow: "#FFCE67",
  white: "#FFFFFF",
};

// Typography
export const pxToRem = (pxValue) => `${pxValue / 16}rem`;

const baseTextStyle = css`
  color: ${(props) => props.$textColor || colors.white};
  font-size: ${pxToRem(16)};
  letter-spacing: -0.5px;
  font-weight: 700;
  line-height: ${pxToRem(21)};
`;

export const HeadingL = styled.h1`
  ${baseTextStyle}
  font-size: ${pxToRem(56)};
  line-height: ${pxToRem(71)};
`;

export const HeadingM = styled.h2`
  ${baseTextStyle}
  font-size: ${pxToRem(24)};
  line-height: ${pxToRem(31)};
`;

export const HeadingS = styled.h3`
  ${baseTextStyle}
  font-size: ${pxToRem(20)};
  line-height: ${pxToRem(26)};
`;

export const HeadingXS = styled.h4`
  ${baseTextStyle}
`;

export const RegularText = styled.p`
  ${baseTextStyle}
  font-weight: 500;
`;

// Spacing
export const spacing = {
  spacing500: pxToRem(40),
  spacing300: pxToRem(24),
  spacing200: pxToRem(20),
  spacing150: pxToRem(12),
  spacing100: pxToRem(8),
  spacing50: pxToRem(4),
};
