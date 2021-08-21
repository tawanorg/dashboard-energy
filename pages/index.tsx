import { Container, Flex, SimpleGrid, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Navigation from '@govhack/components/Navigation';
import CardBox from '@govhack/components/CardBox';
import Chart from '@govhack/components/Chart';
import Stat from '@govhack/components/Stat';

import { GUTTER_WIDTH } from '@govhack/constants';
import React from 'react';

const NEXT_THREE_MONTHS = ['September', 'October', 'November'];

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" width="full">
      <Navigation />
      <Container maxW="8xl" py={GUTTER_WIDTH * 2}>
        <SimpleGrid columns={2} gap={GUTTER_WIDTH * 4} width="full">
          <Stack>
            <CardBox title="Expected Bill for the 4 next months">
              <Stack spacing={GUTTER_WIDTH}>
                {NEXT_THREE_MONTHS.map((month, key) => (
                  <Stat type="increase" key={key} month={month} />
                ))}
                <Stat type="decrease" month="December" />
              </Stack>
            </CardBox>
          </Stack>
          <Stack>
            <CardBox title="Monthly Usage & Billed">
              <Flex>Content</Flex>
            </CardBox>
            <CardBox title="Forecast of Usage">
              <Chart />
            </CardBox>
          </Stack>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Home;
