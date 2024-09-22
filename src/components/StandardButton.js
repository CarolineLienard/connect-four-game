import styled from "styled-components";
import { colors, HeadingXS } from "../styles/theme";

const Button = styled.button`
  background-color: ${colors.purple800};
  padding: 9px 21px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.red};
  }
  > * {
    text-transform: uppercase;
  }
`;

export default function StandardButton({ label, onClick }) {
  return (
    <Button onClick={onClick}>
      <HeadingXS $textColor={colors.white}>{label}</HeadingXS>
    </Button>
  );
}
