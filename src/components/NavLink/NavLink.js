import React from "react";
import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <MainText>{children}</MainText>
      <HoverText aria-hidden="true">{children}</HoverText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;
  position: relative;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    transform: var(--translate-from);
    transition: transform 500ms;
    ${Wrapper}:hover & {
      transform: var(--translate-to);
      transition: transform 200ms;
    }
  }
`;

const MainText = styled(Text)`
  --translate-from: translateY(0%);
  --translate-to: translateY(-100%);
`;

const HoverText = styled(Text)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  font-weight: ${WEIGHTS.bold};
  --translate-from: translateY(100%);
  --translate-to: translateY(0%);
`;

export default NavLink;
