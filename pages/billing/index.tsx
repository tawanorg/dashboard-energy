/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
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
  useBoolean,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Navigation from '@govhack/components/Navigation';
import { GUTTER_WIDTH } from '@govhack/constants';
import CardBox from '@govhack/components/CardBox';
import { formatCurrency } from '../../src/utils/index';
import { useAppContext } from '@govhack/context';

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

const DEFAULT_ENERGY_VALUE = 200;
const DEFAULT_GREENGAS_VALUE = 0.283;

const maxEnergyValue = 500;

const Billing: NextPage = () => {
  const { setToken } = useAppContext();
  const [isEligibled, setEligible] = React.useState(false);
  const modal = useDisclosure();

  const toast = useToast();

  const [energyValue, setEnergyValue] =
    React.useState<number>(DEFAULT_ENERGY_VALUE);
  const [greenValue, setGreenValue] = React.useState<number>(
    DEFAULT_GREENGAS_VALUE
  );
  const [isEligibledLoading, setEligibleLoading] = React.useState(false);
  let timeout: any;

  React.useEffect(() => {
    return () => clearTimeout(timeout);
  }, []);

  React.useEffect(() => {
    modal.onOpen();
  }, []);

  const checkEligibility = () => {
    setEligibleLoading(true);
    timeout = setTimeout(() => {
      setEligible(true);
      setEligibleLoading(false);
    }, 2000);
  };

  const onCloseRewardModal = () => {
    modal.onClose();
    // @ts-ignore
    setToken((prev: number) => prev + 10);

    toast({
      variant: 'left-accent',
      status: 'success',
      title: 'Token has been added!',
      description: `${10} Token has been added into your account`,
      position: 'top',
      duration: 1500,
    });
  };

  const consumpEnergy = (energyValue * 100) / maxEnergyValue;

  return (
    <Flex flexDir="column" width="full">
      <Modal isOpen={modal.isOpen} onClose={modal.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>🎉 Congratulations!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent="center" flexDir="column" alignItems="center">
              <Box fontSize="8xl">🎊</Box>
              <Text fontSize="xl">Thank you for saving the planet!</Text>
              <Text fontSize="xl">
                You've earned <strong>{10}</strong> TOKEN
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button size="lg" colorScheme="yellow" onClick={onCloseRewardModal}>
              Claim reward
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
                <Text>{energyValue} kilowatt-hours of electricity</Text>
                <Box>
                  <CircularProgress
                    value={consumpEnergy}
                    size="200px"
                    color="yellow.500"
                  >
                    <CircularProgressLabel fontSize="4xl" fontWeight="semibold">
                      {energyValue}
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
                  {Number(greenValue.toFixed(2))} metric tonnes of greenhouse
                  gas
                </Text>
                <Box>
                  <CircularProgress
                    value={Number(greenValue.toFixed(2))}
                    size="200px"
                    color="green.400"
                  >
                    <CircularProgressLabel fontSize="4xl" fontWeight="semibold">
                      {Number(greenValue.toFixed(2))}
                      <br />
                      <Text fontSize="md">Metric tonnes</Text>
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
                <Progress
                  colorScheme="yellow"
                  height="32px"
                  value={consumpEnergy}
                />
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  pos="relative"
                  fontSize="sm"
                >
                  <Text>0</Text>
                  {energyValue !== maxEnergyValue && (
                    <Text pos="absolute" left={`${consumpEnergy}%`}>
                      {energyValue} Kwh
                    </Text>
                  )}
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
