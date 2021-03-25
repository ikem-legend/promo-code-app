import React, { FC, useState, useEffect } from 'react';
import { Box, Text, Spinner } from '@chakra-ui/react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import ServiceList from '../components/ServiceList';
import Footer from '../components/Footer';
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
  }, []);
  const updateFilterValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    const filterResults = apiData.filter((data) =>
      data.url.toLowerCase().includes(value.toLowerCase()),
    );
    setPromoData(filterResults);
  };

  const resetFilterValue = () => {
    setPromoData(apiData);
  };

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
            <Filter
              updateFilterValue={updateFilterValue}
              resetFilterValue={resetFilterValue}
            />
            {promoData.length ? (
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
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
