import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const FooterContainer = styled.footer`
  grid-area: footer;
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.background.gray};
  border-top: 1px solid ${theme.colors.border.default};
  text-align: center;
  color: ${theme.colors.text.secondary};
  font-size: 0.875rem;
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
      Versandkosten.
    </FooterContainer>
  );
};
