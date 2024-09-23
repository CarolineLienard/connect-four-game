import styled from "styled-components";
import { colors, pxToRem, spacing } from "../styles/theme";
import { FlexCSS } from "../styles/utils";

const CardContainer = styled.div`
  ${FlexCSS}
  align-items: center;
  text-align: center;
  gap: ${spacing.spacing300};
  padding: ${spacing.spacing600} ${spacing.spacing400};
  max-width: ${pxToRem(380)};
  width: 90%;
  background: ${({ $bgColor }) => $bgColor || colors.purple700};
  border-radius: 40px;
  border: 3px solid ${colors.black};
  box-shadow: 0px 10px 0px 0px ${colors.black};
`;

export default function Card({ bgColor, children, ...props }) {
  return (
    <CardContainer $bgColor={bgColor} {...props}>
      {children}
    </CardContainer>
  );
}
