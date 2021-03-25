import React, { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer: FC = () => {
  return (
    <Box p="2em">
      <Text textAlign="right" fontSize="0.7em" color="#A8A8A8">
        © IT Promocodes, 2019
      </Text>
    </Box>
  );
};

export default Footer;
