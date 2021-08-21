import { Box, Container, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Navigation from '@govhack/components/Navigation';
import MonitorChart from '@govhack/components/MonitorChart';
import CardBox from '@govhack/components/CardBox';
import { GUTTER_WIDTH } from '@govhack/constants';

const Comparison: NextPage = () => {
  return (
    <Flex flexDir="column" width="full">
      <Navigation />
      <Container maxW="6xl" py={GUTTER_WIDTH * 2}>
        <Flex maxWidth="xl" mx="auto" justifyContent="center">
          <CardBox title="Energy saved %">
            <MonitorChart />
          </CardBox>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Comparison;
