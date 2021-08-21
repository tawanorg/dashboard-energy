import React from 'react';
import {
  Stack,
  Progress,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Text,
  Container,
  Flex,
  Button,
  Divider,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Navigation from '@govhack/components/Navigation';
import { GUTTER_WIDTH } from '@govhack/constants';
import CardBox from '@govhack/components/CardBox';
import { formatCurrency } from '../../src/utils/index';

const INSTALLMENT_PLAN = [
  {
    month: 'September',
    value: 30,
  },
  {
    month: 'October',
    value: 32.8,
  },
  {
    month: 'November',
    value: 31.4,
  },
];
const Billing: NextPage = () => {
  const [isEligibled, setEligible] = React.useState(false);
  const [isEligibledLoading, setEligibleLoading] = React.useState(false);
  let timeout: any;

  React.useEffect(() => {
    return () => clearTimeout(timeout);
  }, []);

  const checkEligibility = () => {
    setEligibleLoading(true);
    timeout = setTimeout(() => {
      setEligible(true);
      setEligibleLoading(false);
    }, 2000);
  };

  return (
    <Flex flexDir="column" width="full">
      <Navigation />
      <Container maxW="5xl" py={GUTTER_WIDTH * 2} px={GUTTER_WIDTH}>
        <Flex flexDir="column" flex={1}>
          <CardBox title="Greenhouse Contribution">
            <Flex
              alignItems="center"
              justifyContent="space-between"
              my={GUTTER_WIDTH * 2}
            >
              <Flex
                flexDir="column"
                justifyContent="center"
                alignItems="center"
              >
                <Heading fontSize="md">
                  Total energy consumption last month
                </Heading>
                <Text>400 kilowatt-hours of electricity</Text>
                <Box>
                  <CircularProgress value={100} size="200px" color="yellow.500">
                    <CircularProgressLabel fontSize="4xl" fontWeight="semibold">
                      400
                      <br />
                      <Text fontSize="md">kilowatt-hours</Text>
                    </CircularProgressLabel>
                  </CircularProgress>
                </Box>
              </Flex>
              <Box fontSize="8xl">👉</Box>
              <Flex
                flexDir="column"
                justifyContent="center"
                alignItems="center"
              >
                <Heading fontSize="md">Greenhouse gas contribution</Heading>
                <Text>
                  0.283 metric tons of electricity has been contributed
                </Text>
                <Box>
                  <CircularProgress
                    value={0.283}
                    size="200px"
                    color="green.400"
                  >
                    <CircularProgressLabel fontSize="4xl" fontWeight="semibold">
                      0.283
                      <br />
                      <Text fontSize="md">Metric tons</Text>
                    </CircularProgressLabel>
                  </CircularProgress>
                </Box>
              </Flex>
            </Flex>
          </CardBox>
          <Flex
            shadow="sm"
            flexDir="column"
            p={GUTTER_WIDTH}
            borderWidth="1px"
            rounded="lg"
          >
            <CardBox title="Reward System" subtitle="Consumption Goal">
              <Flex flexDir="column" py={GUTTER_WIDTH / 2}>
                <Progress colorScheme="yellow" height="32px" value={40} />
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  pos="relative"
                  fontSize="sm"
                >
                  <Text>0</Text>
                  <Text pos="absolute" left="40%">
                    134 Kwh
                  </Text>
                  <Text>500 Kwh</Text>
                </Flex>
              </Flex>
            </CardBox>
          </Flex>
        </Flex>
        <Flex py={GUTTER_WIDTH} mt={GUTTER_WIDTH * 2}>
          <Flex flex="1">
            <CardBox title="Covid-19 Payment Scheme">
              <Flex flexDir="column" my={GUTTER_WIDTH}>
                <Flex justifyContent="space-between">
                  <Text>Current Credit Ratings</Text>
                  <Text>501.90</Text>
                </Flex>
                <Flex justifyContent="space-between">
                  <Text>Number of payment defeated</Text>
                  <Text>0</Text>
                </Flex>
              </Flex>
              {!isEligibled && (
                <Button
                  onClick={checkEligibility}
                  isLoading={isEligibledLoading}
                >
                  Check Eligibility for plan
                </Button>
              )}
              {isEligibled && (
                <>
                  <Flex flexDir="column">
                    <Flex justifyContent="space-between" fontWeight="semibold">
                      <Text>Month</Text>
                      <Text>Installment Amount</Text>
                    </Flex>
                    <Divider my={2} />
                    {INSTALLMENT_PLAN.map((plan, key) => (
                      <Flex justifyContent="space-between" key={key}>
                        <Text>{plan.month}</Text>
                        <Text>{formatCurrency(plan.value)}</Text>
                      </Flex>
                    ))}
                  </Flex>
                </>
              )}
            </CardBox>
          </Flex>
          <Flex flex="1">
            <CardBox title="Pay Bill">
              <Flex mt="4">
                <Button mr="4">Pay by tokens</Button>
                <Button>Pay by credit card</Button>
              </Flex>
            </CardBox>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Billing;
