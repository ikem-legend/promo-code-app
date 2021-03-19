import React, { FC } from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';

const Header: FC = () => {
  return (
    <Grid templateColumns="repeat(16, 1fr)" gap={1}>
      <GridItem colSpan={1}>
        <Text fontSize="0.75em" color="#7D7D7D">
          Balance
        </Text>
        <Text fontFamily="Rubik" fontWeight="bold">
          213 920 $
        </Text>
      </GridItem>
      <GridItem colSpan={1}>
        <Text fontSize="0.75em" color="#7D7D7D">
          Payout
        </Text>
        <Text fontFamily="Rubik" fontWeight="bold">
          159 465 $
        </Text>
      </GridItem>
    </Grid>
  );
};

export default Header;
