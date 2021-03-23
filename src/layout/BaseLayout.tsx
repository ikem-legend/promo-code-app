import React, { FC } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from './Navbar';

const BaseLayout: FC = ({ children }) => {
  return (
    <Grid templateColumns="repeat(16, 1fr)" gap={0}>
      <GridItem colSpan={{ base: 2, sm: 2, md: 1 }}>
        <Navbar />
      </GridItem>
      <GridItem colSpan={{ base: 14, sm: 14, md: 15 }}>{children}</GridItem>
    </Grid>
  );
};

export default BaseLayout;
