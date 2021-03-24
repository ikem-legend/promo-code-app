import React, { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import ServiceList from '../components/ServiceList';
import { apiData } from '../data/api-data';

const Home: FC = () => {
  const promoData = apiData[0];
  const activateBonus = (id: number): void => {
    console.log(id);
  };
  return (
    <Box>
      <Header />
      <Box p="2em">
        <Text as="h2" fontSize="40px">
          Services
        </Text>
        <Filter />
        <ServiceList promoData={promoData} activateBonus={activateBonus} />
        <Box p="2em">
          <Text textAlign="right" fontSize="0.7em" color="#A8A8A8">
            © IT Promocodes, 2019
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
