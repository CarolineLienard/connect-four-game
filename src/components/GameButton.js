import styled from "styled-components";
import { colors, HeadingM, spacing } from "../styles/theme";
import { BlackBox } from "../styles/utils";

const StyledButton = styled.button`
  ${BlackBox}
  padding: ${spacing.spacing200};
  background-color: ${(props) => props.bgColor || colors.white};
  border: 3px solid ${colors.black};
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: border 0.3s, box-shadow 0.3s;
  &:hover {
    border: 3px solid ${colors.purple800};
    box-shadow: 0px 10px 0px 0px ${colors.purple800};
  }
`;

const Label = styled(HeadingM)`
  text-transform: uppercase;
  color: ${(props) => props.textColor || colors.black};
`;

export default function Button({ label, bgColor, textColor, children }) {
  return (
    <StyledButton textColor={textColor} bgColor={bgColor}>
      <Label textColor={textColor}>{label}</Label>
      {children}
    </StyledButton>
  );
}
