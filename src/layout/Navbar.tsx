import React, { FC } from 'react';
import { Box, VStack, Link, Image } from '@chakra-ui/react';
import AppLogo from '../assets/images/app-logo.svg';
import AppPage from '../assets/images/app-pages-icon.svg';

const Navbar: FC = () => {
  return (
    <Box h="100vh" pos="sticky" top="0" left="0" bgColor="#1B1D29" py="1em">
      <VStack spacing={8} as="nav">
        <Box>
          <Link>
            <Image src={AppLogo} alt="app logo" />
          </Link>
        </Box>
        <Box />
        <Box>
          <Link>
            <Image src={AppPage} alt="nav link" />
          </Link>
        </Box>
        <Box>
          <Link>
            <Image src={AppPage} alt="nav link" />
          </Link>
        </Box>
        <Box>
          <Link>
            <Image src={AppPage} alt="nav link" />
          </Link>
        </Box>
        <Box>
          <Link>
            <Image src={AppPage} alt="nav link" />
          </Link>
        </Box>
        <Box>
          <Link>
            <Image src={AppPage} alt="nav link" />
          </Link>
        </Box>
        <Box>
          <Link>
            <Image src={AppPage} alt="nav link" />
          </Link>
        </Box>
        <Box>
          <Link>
            <Image src={AppPage} alt="nav link" />
          </Link>
        </Box>
        <Box>
          <Link>
            <Image src={AppPage} alt="nav link" />
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};

export default Navbar;
