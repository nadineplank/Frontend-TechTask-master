import React from "react";
import styled from "@emotion/styled";
import { Category } from "../../types";
import { theme } from "../../styles/theme";

const SidebarContainer = styled.aside`
  grid-area: sidebar;
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.background.gray};
`;

const SidebarTitle = styled.h3`
  margin-bottom: ${theme.spacing.md};
  font-size: 1.125rem;
  color: ${theme.colors.text.primary};
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CategoryItem = styled.li`
  margin-bottom: ${theme.spacing.sm};
`;

const CategoryLink = styled.a`
  color: ${theme.colors.text.primary};
  text-decoration: none;
  transition: color ${theme.transitions.normal};

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const LoadingText = styled.p`
  color: ${theme.colors.text.secondary};
`;

interface SidebarProps {
  categories: Category[];
  isLoading?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  categories,
  isLoading = false,
}) => {
  return (
    <SidebarContainer>
      <SidebarTitle>Kategorien</SidebarTitle>
      {isLoading ? (
        <LoadingText>Loading categories...</LoadingText>
      ) : categories.length > 0 && categories[0].childrenCategories ? (
        <CategoryList>
          {categories[0].childrenCategories.list.map(({ name, urlPath }) => (
            <CategoryItem key={urlPath}>
              <CategoryLink href={`/${urlPath}`}>{name}</CategoryLink>
            </CategoryItem>
          ))}
        </CategoryList>
      ) : (
        <LoadingText>No categories available</LoadingText>
      )}
    </SidebarContainer>
  );
};
