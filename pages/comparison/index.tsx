import { Box, Container, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Navigation from '@govhack/components/Navigation';
import MonitorChart from '@govhack/components/MonitorChart';
import CardBox from '@govhack/components/CardBox';
import { GUTTER_WIDTH } from '@govhack/constants';
import Map from '@govhack/components/Map';

const Comparison: NextPage = () => {
  return (
    <Flex flexDir="column" width="full">
      <Navigation />
      <Box width="full" height="full" pos="relative">
        <Map>
          <CardBox title="Your daily average consumption">
            <MonitorChart value={12.6} />
          </CardBox>
        </Map>
      </Box>
    </Flex>
  );
};

export default Comparison;
