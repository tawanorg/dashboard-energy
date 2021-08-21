import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "'Rubik', Open Sans, sans-serif",
    body: "'Rubik', Open Sans, sans-serif;",
  },
});

export default theme;
