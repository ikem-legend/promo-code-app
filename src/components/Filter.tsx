import React, { FC } from 'react';
import { Grid, GridItem, FormControl, Input, Button } from '@chakra-ui/react';

const Filter: FC = () => {
  return (
    <Grid templateColumns="repeat(16, 1fr)" gap={1} p="1em 2em">
      <GridItem colSpan={4}>
        <FormControl id="search">
          <Input bgColor="#FFFFFF" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <Button type="reset" variant="outline" isFullWidth>
          Reset
        </Button>
      </GridItem>
    </Grid>
  );
};

export default Filter;
