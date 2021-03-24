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
import { PromoCode } from '../data/api-data';

type ServiceListProps = {
  promoData: PromoCode;
  activateBonus(id: number): void;
};

const ServiceList: FC<ServiceListProps> = ({ promoData, activateBonus }) => {
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
          <Text>{promoData.url}</Text>
        </Box>
        <Text fontSize="0.7em">{promoData.description}</Text>
      </GridItem>
      <GridItem colSpan={2}>
        <Box lineHeight="2em">
          <Text textTransform="uppercase" fontSize="0.4em">
            PromoCode
          </Text>
        </Box>
        <InputGroup>
          <Input value={promoData.code} readonly />
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
          onClick={() => activateBonus(promoData.id)}
        >
          Activate bonus
        </Button>
      </GridItem>
    </Grid>
  );
};

export default ServiceList;
