import * as React from 'react';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

const DesignProvider: React.FC = ({ children }) => {
  // 2. Use at the root of your app
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default DesignProvider;
