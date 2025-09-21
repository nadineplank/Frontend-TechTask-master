import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Sidebar } from "../Sidebar/Sidebar";
import { Footer } from "../Footer/Footer";
import { Category } from "../../types";
import { theme } from "../../styles/theme";

const PageContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 260px 1fr;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  margin: 0;
  min-height: 100vh;
  background-color: ${theme.colors.background.primary};

  & > * {
    padding: 10px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "sidebar"
      "content"
      "footer";
  }
`;

const Content = styled.main`
  grid-area: content;
  padding: ${theme.spacing.lg};
`;

interface LayoutProps {
  children: ReactNode;
  categories?: Category[];
  isLoading?: boolean;
  header?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  categories = [],
  header,
}) => {
  return (
    <PageContainer>
      {header}
      <Sidebar categories={categories} />
      <Content>{children}</Content>
      <Footer />
    </PageContainer>
  );
};
