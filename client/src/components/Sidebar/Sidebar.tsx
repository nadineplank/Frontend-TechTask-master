import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Category } from "../../types";
import { theme } from "../../styles/theme";
import { useIsMobile } from "../../hooks/useIsMobile";

const SidebarContainer = styled.aside<{ isOpen: boolean }>`
  grid-area: sidebar;
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.background.gray};
  }
`;

const SidebarHeader = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: ${theme.spacing.md};

  @media (max-width: 768px) {
    margin-bottom: ${(props) => (props.isOpen ? theme.spacing.md : 0)};
  }
`;

const SidebarTitle = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  color: ${theme.colors.text.primary};
`;

const ToggleButton = styled.button<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    padding: ${theme.spacing.sm};
    transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
    transition: transform 0.3s ease;

    &::before {
      content: "▼";
      color: ${theme.colors.text.primary};
    }
  }
`;

const CategoryList = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
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
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader onClick={toggleSidebar} isOpen={isOpen}>
        <SidebarTitle>Kategorien</SidebarTitle>
        <ToggleButton isOpen={isOpen} aria-label="Toggle categories" />
      </SidebarHeader>

      {isLoading ? (
        <LoadingText>Loading categories...</LoadingText>
      ) : categories.length > 0 && categories[0].childrenCategories ? (
        <CategoryList isOpen={isOpen}>
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
