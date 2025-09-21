import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { theme } from "../../styles/theme";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid ${theme.colors.background.gray};
  border-top: 4px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.full};
  animation: ${spin} 1s linear infinite;
  margin-bottom: ${theme.spacing.md};
`;

const LoadingText = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 1.125rem;
`;

interface LoadingStateProps {
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = "Loading...",
}) => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>{message}</LoadingText>
    </LoadingContainer>
  );
};
