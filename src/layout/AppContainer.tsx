import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

const AppContainer: FC = ({ children }) => {
  return (
    <Box minHeight="100vh" w="100%" maxW="100%">
      {children}
    </Box>
  );
};

export default AppContainer;
