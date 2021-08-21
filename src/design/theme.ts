// theme.ts

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// font-family: 'IBM Plex Sans Thai', 'Rubik', Open Sans, sans-serif;

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: {
    heading: "'Rubik', Open Sans, sans-serif",
    body: "'Rubik', Open Sans, sans-serif;",
  },
});

export default theme;
