import styled from "styled-components";
import { colors, HeadingM, spacing } from "../styles/theme";
import { BlackBox } from "../styles/utils";
import Icon from "./Icon";

const StyledButton = styled.button`
  ${BlackBox}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.spacing200};
  background-color: ${(props) => props.$bgColor || colors.white};
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: border 0.3s, box-shadow 0.3s;
  position: relative;
  &:hover {
    border: 3px solid ${colors.purple800};
    box-shadow: 0px 10px 0px 0px ${colors.purple800};
  }
`;

const Label = styled(HeadingM)`
  text-transform: uppercase;
  color: ${(props) => props.$textColor || colors.black};
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
`;

export default function Button({ label, bgColor, textColor, icon, onClick }) {
  return (
    <StyledButton $bgColor={bgColor} onClick={onClick}>
      <Label $textColor={textColor}>{label}</Label>
      {icon && (
        <IconWrapper>
          <Icon src={icon} alt="icon" size={80} />
        </IconWrapper>
      )}
    </StyledButton>
  );
}
