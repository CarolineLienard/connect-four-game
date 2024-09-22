import styled from "styled-components";
import StandardButton from "./StandardButton";
import Icon from "./Icon";
import logo from "../assets/images/logo.svg";

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export default function HeaderMenu({menu, restart}) {
  return (
    <MenuContainer>
      <StandardButton label="Menu" onClick={menu} />
      <Icon src={logo} alt="logo" size={52} />
      <StandardButton label="Restart" onClick={restart} />
    </MenuContainer>
  );
}
