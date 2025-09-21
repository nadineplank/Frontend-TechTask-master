import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const HeaderContainer = styled.header`
  grid-area: header;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background-color: ${theme.colors.background.white};
  border-bottom: 1px solid ${theme.colors.border.default};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.strong`
  font-size: 1.5rem;
  color: ${theme.colors.text.primary};
`;

const SearchInput = styled.input`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid ${theme.colors.border.input};
  border-radius: ${theme.borderRadius.sm};
  width: 300px;
  font-size: 0.875rem;
  transition: border-color ${theme.transitions.normal},
    box-shadow ${theme.transitions.normal};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: ${theme.shadows.focus};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 150px;
  }
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>home24</Logo>
      <SearchInput placeholder="Search" aria-label="Search products" />
    </HeaderContainer>
  );
};
