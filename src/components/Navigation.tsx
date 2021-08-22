import {
  Button,
  Flex,
  Text,
  Box,
  Avatar,
  Heading,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import faker from 'faker';
import { GUTTER_WIDTH } from '../constants';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { useAppContext } from '@govhack/context';

const MENU = [
  {
    path: '/',
    title: 'Your home',
  },
  {
    path: '/comparison',
    title: 'Energy comparison',
  },
  {
    path: '/billing',
    title: 'Rewards & Billing',
  },
];

const Navigation = () => {
  const { asPath } = useRouter();
  const { token } = useAppContext();

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={GUTTER_WIDTH}
      width="full"
      borderBottomWidth="2px"
      borderColor="black"
    >
      <Flex alignItems="center">
        <Heading
          fontSize="2xl"
          fontFamily="heading"
          display={{ base: 'inline-block', md: 'none' }}
          mr={GUTTER_WIDTH}
        >
          E
        </Heading>
        <Heading
          fontSize="2xl"
          fontFamily="heading"
          display={{ base: 'none', md: 'inline-block' }}
        >
          Energetik
        </Heading>
        <IconButton
          aria-label="menu"
          icon={<HamburgerIcon boxSize="6" />}
          display={{ base: 'inline-block', md: 'none' }}
        />
      </Flex>
      <HStack spacing={GUTTER_WIDTH * 2} display={{ base: 'none', md: 'flex' }}>
        {MENU.map((menu, key) => (
          <Link href={menu.path} passHref key={key}>
            <Text
              fontSize="xl"
              fontWeight="medium"
              cursor="pointer"
              {...(asPath === menu.path && {
                textDecor: 'underline',
              })}
              _hover={{
                textDecor: 'underline',
              }}
            >
              {menu.title}
            </Text>
          </Link>
        ))}
      </HStack>
      <Flex alignItems="center">
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="flex-end"
          mr={GUTTER_WIDTH}
        >
          <Text opacity="0.6">Your reward</Text>
          <Text fontSize="xl" fontWeight="medium">
            🎉 {token.toFixed(2)} TOKENS{' '}
            {/* <Button size="sm" ml={GUTTER_WIDTH / 2}>
              Claim
            </Button> */}
          </Text>
        </Flex>
        <Avatar name="Tew Tawan" />
      </Flex>
    </Flex>
  );
};

export default Navigation;
