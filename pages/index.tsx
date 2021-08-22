import {
  Wrap,
  WrapItem,
  Box,
  Container,
  Flex,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import type { NextPage } from 'next';

import Navigation from '@govhack/components/Navigation';
import CardBox from '@govhack/components/CardBox';
import Stat from '@govhack/components/Stat';

import { GUTTER_WIDTH } from '@govhack/constants';
import React from 'react';
import ChartUsage from '@govhack/components/ChartUsage';
import ChartBill from '@govhack/components/ChartBill';
import ChartForecast from '@govhack/components/ChartForecast';

const forecastData = [
  ['September', 76.91528, 'decrease'],
  ['October', 78.2378, 'increase'],
  ['November', 77.57654, 'decrease'],
  ['December', 77.67284, 'increase'],
];

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" width="full">
      <Navigation />
      <Container maxW="8xl" py={GUTTER_WIDTH * 4}>
        <SimpleGrid columns={2} gap={GUTTER_WIDTH * 4} width="full">
          <Stack spacing={GUTTER_WIDTH * 4}>
            <CardBox title="Monthly Usage">
              <ChartUsage />
            </CardBox>

            <CardBox title="Forecast of Usage">
              <ChartForecast />
            </CardBox>
          </Stack>
          <Stack spacing={GUTTER_WIDTH * 4}>
            <CardBox title="Monthly Bills">
              <ChartBill />
            </CardBox>

            <CardBox
              title="Predicted Bills"
              subtitle="Predicted bills for the 4 next months"
            >
              <Stack
                // columns={2}
                spacing={GUTTER_WIDTH}
                py={GUTTER_WIDTH * 2}
              >
                {forecastData.map((month, key) => (
                  <Stat
                    // @ts-ignore
                    type={month[2]}
                    key={key}
                    // @ts-ignore
                    month={month[0]}
                    value={Number(month[1])}
                  />
                ))}
              </Stack>
            </CardBox>
          </Stack>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Home;
