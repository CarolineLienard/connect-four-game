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
  letter-spacing: 0px;
  line-height: 150%;
`;

export const MainHeading = styled.h1`
  ${baseTextStyle}
  font-size: ${pxToRem(24)};
  font-weight: 700;
`;

export const BoldHeading = styled.h2`
  ${baseTextStyle}
  font-size: ${pxToRem(20)};
  font-weight: 700;
`;

export const RegularText = styled.p`
  ${baseTextStyle}
`;

export const BoldText = styled.p`
  ${baseTextStyle}
  font-weight: 700;
`;

// Spacing
export const spacing = {
  spacing500: pxToRem(40),
  spacing300: pxToRem(24),
  spacing200: pxToRem(16),
  spacing150: pxToRem(12),
  spacing100: pxToRem(8),
  spacing50: pxToRem(4),
};
