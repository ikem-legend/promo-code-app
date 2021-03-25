import React, { FC, useState, useEffect } from 'react';
import { Box, Text, Spinner } from '@chakra-ui/react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import ServiceList from '../components/ServiceList';
import { apiData, PromoCode } from '../data/api-data';

const Home: FC = () => {
  const [requestingData, setRequestingData] = useState(true);
  const [promoData, setPromoData] = useState<PromoCode[]>([]);
  useEffect(() => {
    const dataRequestTimeout = setTimeout(() => {
      setRequestingData(false);
      setPromoData(apiData);
    }, 2500);
    return () => {
      if (dataRequestTimeout) {
        clearTimeout(dataRequestTimeout);
      }
    };
  });
  return (
    <Box>
      <Header />
      <Box p="2em">
        <Text as="h2" fontSize="40px">
          Services
        </Text>
        {requestingData ? (
          <Box textAlign="center">
            <Spinner size="xl" color="blue.500" emptyColor="gray.200" />
          </Box>
        ) : (
          <>
            <Filter />
            {promoData ? (
              promoData.map((data) => (
                <ServiceList promoData={data} key={data.id} />
              ))
            ) : (
              <Box>
                <Text textAlign="center">No services available</Text>
              </Box>
            )}
          </>
        )}
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
