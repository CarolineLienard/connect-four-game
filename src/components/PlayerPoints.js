import styled from "styled-components";
import Card from "./Card";
import { pxToRem, colors, spacing, HeadingS, HeadingL } from "../styles/theme";
import Icon from "./Icon";
import redPlayer from "../assets/images/player-one.svg";
import yellowPlayer from "../assets/images/player-two.svg";

const PointCard = styled(Card)`
  padding: ${spacing.spacing500} ${spacing.spacing200} ${spacing.spacing300};
  border-radius: 20px;
  max-width: ${pxToRem(120)};
  position: relative;
  z-index: 10;
`;

const Count = styled.div`
  width: 100%;
  text-transform: uppercase;
`;

const PointsIcon = styled.div`
  position: absolute;
  top: -1.8rem;
  left: 32%;
`;

export default function PlayerPoints({ player, points }) {
  const iconSrc = player === "1" ? redPlayer : yellowPlayer;

  return (
      <PointCard bgColor={colors.white}>
        <Count>
          <HeadingS>Player {player}</HeadingS>
          <HeadingL>{points}</HeadingL>
        </Count>
        <PointsIcon>
          <Icon src={iconSrc} alt={`${player} icon`} size={60} />
        </PointsIcon>
      </PointCard>
  );
}
