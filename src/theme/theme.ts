import {extendTheme, type ThemeConfig} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#fad78c',
      100: '#f7cc6f',
      200: '#f12711',
      500: '#f12711',
      600: '#f74c39',
    },
    instagram: {
      500: '#E1306C',
    },
  },
  fonts: {
    body: 'Spline Sans, sans-serif',
    heading: 'Spline Sans, sans-serif',
  },
});

export default theme;
