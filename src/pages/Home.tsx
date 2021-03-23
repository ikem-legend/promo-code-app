import React, { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import Filter from '../components/Filter';

const Home: FC = () => {
  return (
    <Box>
      <Header />
      <Box p="2em">
        <Text as="h2" fontSize="40px">
          Services
        </Text>
        <Filter />
      </Box>
    </Box>
  );
};

export default Home;
