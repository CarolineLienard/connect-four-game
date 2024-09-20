import styled from "styled-components";
import { colors, pxToRem, spacing } from "../styles/theme";
import { FlexCSS } from "../styles/utils";

const CardContainer = styled.div`
  ${FlexCSS}
  align-items: center;
  text-align: center;
  gap: ${spacing.spacing300};
  padding: ${spacing.spacing500};
  width: ${pxToRem(380)};
  background: ${colors.purple700};
  border-radius: 40px;
  border: 3px solid ${colors.black};
  box-shadow: 0px 10px 0px 0px ${colors.black};
`;

export default function Card({ children }) {
  return <CardContainer>{children}</CardContainer>;
}
