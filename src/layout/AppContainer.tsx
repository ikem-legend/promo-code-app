import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

const AppContainer: FC = ({ children }) => {
  return (
    <Box minH="100vh" w="100%" maxW="100%" bgColor="#E5E5E5">
      {children}
    </Box>
  );
};

export default AppContainer;
