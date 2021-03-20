import React, { Suspense } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AppContainer from './layout/AppContainer';
import Home from './pages/Home';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  return (
    <AppContainer>
      <ChakraProvider>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        </ErrorBoundary>
      </ChakraProvider>
    </AppContainer>
  );
}

export default App;
