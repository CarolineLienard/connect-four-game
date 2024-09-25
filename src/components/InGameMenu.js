import styled from "styled-components";
import Card from "./Card";
import GameButton from "./GameButton";
import { colors, HeadingL } from "../styles/theme";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const MenuButton = styled(GameButton)`
  justify-content: center;
`;

const InGameMenu = ({ isOpen, onClose, restart, quit }) => {
  if (!isOpen) return null;
  return (
    <Overlay>
      <Card>
        <HeadingL $textColor={colors.white}>Pause</HeadingL>
        <MenuButton label="Continue game" onClick={onClose} />
        <MenuButton label="Restart" onClick={restart} />{" "}
        <MenuButton
          label="Quit game"
          bgColor={colors.red}
          textColor={colors.white}
          onClick={quit}
        />
      </Card>
    </Overlay>
  );
};

export default InGameMenu;
