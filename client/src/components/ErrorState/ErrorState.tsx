import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
`;

const ErrorTitle = styled.h2`
  color: ${theme.colors.error};
  margin-bottom: ${theme.spacing.md};
`;

const ErrorMessage = styled.p`
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.lg};
`;

const RetryButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text.white};
  border: none;
  border-radius: ${theme.borderRadius.sm};
  font-size: 1rem;
  cursor: pointer;
  transition: background-color ${theme.transitions.normal};

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }

  &:focus {
    outline: none;
    box-shadow: ${theme.shadows.focus};
  }
`;

interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Something went wrong",
  message,
  onRetry,
}) => {
  return (
    <ErrorContainer>
      <ErrorTitle>{title}</ErrorTitle>
      <ErrorMessage>{message}</ErrorMessage>
      {onRetry && <RetryButton onClick={onRetry}>Try Again</RetryButton>}
    </ErrorContainer>
  );
};
