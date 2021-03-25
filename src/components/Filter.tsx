import React, { FC, useState } from 'react';
import { Grid, GridItem, FormControl, Input, Button } from '@chakra-ui/react';

type FilterProps = {
  updateFilterResults(value: string): void;
  resetFilterResults(): void;
};

const Filter: FC<FilterProps> = ({
  updateFilterResults,
  resetFilterResults,
}) => {
  const [filterTerm, setFilterTerm] = useState('');
  const updateFilterValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setFilterTerm(value);
    updateFilterResults(value);
  };

  const resetFilterValue = (): void => {
    setFilterTerm('');
    resetFilterResults();
  };

  return (
    <Grid templateColumns="repeat(16, 1fr)" gap={1} p="1em 0">
      <GridItem colSpan={4}>
        <FormControl id="search">
          <Input
            bgColor="#FFFFFF"
            _focus={{ border: '1px solid #0085FF' }}
            value={filterTerm}
            onChange={(e) => updateFilterValue(e)}
          />
        </FormControl>
      </GridItem>
      <GridItem colSpan={3}>
        <Button
          type="reset"
          border="1px solid #CFD2D9"
          isFullWidth
          onClick={resetFilterValue}
        >
          Reset
        </Button>
      </GridItem>
    </Grid>
  );
};

export default Filter;
