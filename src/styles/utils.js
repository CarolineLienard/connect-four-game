import { css } from "styled-components";
import { colors } from "./theme";

export const FlexCSS = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const BlackBox = css`
  border: 3px solid ${colors.black};
  box-shadow: 0px 10px 0px 0px ${colors.black};
`;