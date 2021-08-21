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
import Chart from '@govhack/components/Chart';
import Stat from '@govhack/components/Stat';

import { GUTTER_WIDTH } from '@govhack/constants';
import React from 'react';
import ChartTwo from '@govhack/components/ChartTwo';

const NEXT_THREE_MONTHS = ['September', 'October', 'November'];

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" width="full">
      <Navigation />
      <Container maxW="8xl" py={GUTTER_WIDTH * 4}>
        <SimpleGrid columns={2} gap={GUTTER_WIDTH * 4} width="full">
          <Stack spacing={GUTTER_WIDTH * 4}>
            <CardBox
              title="Average electricity usage"
              subtitle="24 hours usage data vs average electricity usage by census"
            >
              <Flex
                mt={GUTTER_WIDTH * 2}
                alignItems="center"
                width="full"
                shadow="lg"
                p={GUTTER_WIDTH}
                borderRadius="lg"
                borderWidth="1px"
              >
                Content
              </Flex>
            </CardBox>
            <CardBox
              title="Expected Bill"
              subtitle="Expected Bill for the 4 next months"
            >
              <SimpleGrid
                columns={2}
                spacing={GUTTER_WIDTH}
                py={GUTTER_WIDTH * 2}
              >
                {NEXT_THREE_MONTHS.map((month, key) => (
                  <Stat type="increase" key={key} month={month} />
                ))}
                <Stat type="decrease" month="December" />
              </SimpleGrid>
            </CardBox>
          </Stack>
          <Stack>
            <CardBox title="Monthly Usage & Billed">
              <ChartTwo />
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
