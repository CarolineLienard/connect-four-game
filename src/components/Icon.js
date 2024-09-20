import React from "react";
import styled from "styled-components";
import { pxToRem } from "../styles/theme";

const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => pxToRem(props.size || 40)};
`;

export default function Icon({ src, alt = "icon", size }) {
  return (
    <IconContainer size={size}>
      <img src={src} alt={alt} />
    </IconContainer>
  );
}
