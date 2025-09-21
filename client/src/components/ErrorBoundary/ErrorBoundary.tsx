// client/src/components/ErrorBoundary/ErrorBoundary.tsx

import React, { Component, ErrorInfo, ReactNode } from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const ErrorBoundaryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.background.lightGray};
`;

const ErrorContent = styled.div`
  max-width: 600px;
  padding: ${theme.spacing.xl};
  background: ${theme.colors.background.white};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.sm};
  text-align: center;
`;

const ErrorHeading = styled.h2`
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const ErrorMessage = styled.p`
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.lg};
`;

const ErrorDetails = styled.details`
  margin-bottom: ${theme.spacing.lg};
  text-align: left;
`;

const ErrorSummary = styled.summary`
  cursor: pointer;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};

  &:hover {
    color: ${theme.colors.primaryHover};
  }
`;

const ErrorPre = styled.pre`
  background-color: ${theme.colors.background.gray};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  overflow-x: auto;
  color: ${theme.colors.error};
  font-size: 0.875rem;
`;

const RetryButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  background-color: ${theme.colors.primary};
  color: white;
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

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorBoundaryContainer>
          <ErrorContent>
            <ErrorHeading>Oops! Something went wrong</ErrorHeading>
            <ErrorMessage>
              We're sorry, but something went wrong. Please try refreshing the
              page.
            </ErrorMessage>
            <ErrorDetails>
              <ErrorSummary>Error details</ErrorSummary>
              <ErrorPre>{this.state.error?.message}</ErrorPre>
            </ErrorDetails>
            <RetryButton onClick={this.handleReset}>Try again</RetryButton>
          </ErrorContent>
        </ErrorBoundaryContainer>
      );
    }

    return this.props.children;
  }
}
