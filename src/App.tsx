import React, { Suspense } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ErrorBoundary } from './components/ErrorBoundary';
import AppContainer from './layout/AppContainer';
import BaseLayout from './layout/BaseLayout';
import Home from './pages/Home';

function App() {
  return (
    <AppContainer>
      <ChakraProvider>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <BaseLayout>
              <Home />
            </BaseLayout>
          </Suspense>
        </ErrorBoundary>
      </ChakraProvider>
    </AppContainer>
  );
}

export default App;
