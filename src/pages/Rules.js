import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Icon from "../components/Icon";
import {
  colors,
  HeadingL,
  HeadingS,
  HeadingXS,
  RegularText,
  spacing,
} from "../styles/theme";
import { FlexCSS, BlackBox, PageContainer } from "../styles/utils";
import { rules } from "../data/rules";
import check from "../assets/images/icon-check.svg";

const RulesCard = styled.div`
  position: relative;
`;

const RuleContainer = styled.div`
  ${FlexCSS}
  gap: ${spacing.spacing200};
  text-align: left;
`;

const RulesList = styled.ul`
  ${FlexCSS}
  list-style-type: none;
  gap: ${spacing.spacing150};
  padding-bottom: ${spacing.spacing200};
  li {
    display: flex;
    align-items: center;
    gap: ${spacing.spacing200};
  }
`;

const CheckIcon = styled.div`
  position: absolute;
  bottom: -2rem;
  left: 50%;
  transform: translateX(-50%);
`;

const IconButton = styled.button`
  ${BlackBox}
  display: flex;
  align-items: center;
  background-color: ${colors.red};
  border-radius: 50px;
  cursor: pointer;
  transition: border 0.3s, box-shadow 0.3s;
  box-shadow: 0px 6px 0px 0px ${colors.black};
  &:hover {
    border: 3px solid ${colors.purple800};
    box-shadow: 0px 6px 0px 0px ${colors.purple800};
  }
`;

export default function Rules() {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <RulesCard>
        <Card bgColor={colors.white}>
          <HeadingL $textColor={colors.black}>RULES</HeadingL>
          <RuleContainer>
            <HeadingS $textColor={colors.purple700}>OBJECTIVE</HeadingS>
            <RegularText>{rules.objective}</RegularText>
          </RuleContainer>
          <RuleContainer>
            <HeadingS $textColor={colors.purple700}>HOW TO PLAY</HeadingS>
            <RulesList>
              {rules.rules.map((rule) => (
                <li key={rule.id}>
                  <HeadingXS>{rule.id}</HeadingXS>
                  <RegularText>{rule.description}</RegularText>
                </li>
              ))}
            </RulesList>
          </RuleContainer>
        </Card>
        <CheckIcon>
          <IconButton onClick={() => navigate("/")}>
            <Icon src={check} size={64} />
          </IconButton>
        </CheckIcon>
      </RulesCard>
    </PageContainer>
  );
}
