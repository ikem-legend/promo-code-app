import React, { Component, ReactNode } from 'react';
import log from 'loglevel';
import { Box, Container } from '@chakra-ui/react';

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error | null): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error | null, errorInfo: object): void {
    log.error(error, errorInfo);
  }

  render(): ReactNode {
    return this.state.hasError ? (
      <Box>
        <Container>
          It seems like the page didn&apos;t load properly. Please refresh the
          page
        </Container>
      </Box>
    ) : (
      this.props.children
    );
  }
}
