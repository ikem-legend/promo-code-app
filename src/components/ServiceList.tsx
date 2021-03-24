import React, { FC } from 'react';
import {
  Grid,
  GridItem,
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';

const ServiceList: FC = () => {
  return (
    <Grid
      templateColumns="repeat(8, 1fr)"
      gap={2}
      bgColor="#FFFFFF"
      p="2em"
      borderRadius="0.5em"
    >
      <GridItem colSpan={4}>
        <Box lineHeight="2em">
          <Text>Name</Text>
        </Box>
        <Text>Description</Text>
      </GridItem>
      <GridItem colSpan={2}>
        <Box lineHeight="2em">
          <Text textTransform="uppercase" fontSize="0.4em">
            PromoCode
          </Text>
        </Box>
        <InputGroup>
          <Input value="itpromocodes" />
          <InputRightElement children={<CopyIcon color="#0085FF" />} />
        </InputGroup>
      </GridItem>
      <GridItem colSpan={2}>
        <Box lineHeight="2em">
          <Text visibility="hidden">Activate Button</Text>
        </Box>
        <Button
          isFullWidth={true}
          bgColor="#0085FF"
          color="#FFFFFF"
          _hover={{
            backgroundColor: '#FFFFFF',
            color: '#0085FF',
            border: '1px solid #0085FF',
          }}
        >
          Activate bonus
        </Button>
      </GridItem>
    </Grid>
  );
};

export default ServiceList;
