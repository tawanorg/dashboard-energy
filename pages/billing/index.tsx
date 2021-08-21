import { Container, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Navigation from '@govhack/components/Navigation';

const Billing: NextPage = () => {
  return (
    <Flex flexDir="column" width="full">
      <Navigation />
      <Container maxW="6xl">billing</Container>
    </Flex>
  );
};

export default Billing;
