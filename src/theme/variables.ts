import {Theme} from './types';

const theme: Theme = {
  colors: {
    primary: '#fed500',
    secunday: '#016098',
    secundayDark: '#064875',
    white: '#fff',
    black: '#000',
    red: 'red',
  },
  border: {
    radius: {
      zero: 0,
      xsmall: 4,
      small: 8,
      regular: 16,
      circle: 9999,
    },
    width: {
      zero: 0,
      small: 1,
      medium: 2,
      large: 3,
      huge: 5,
    },
  },
  spacing: {
    zero: 0,
    xxxsmall: 4,
    xxsmall: 8,
    xsmall: 12,
    small: 16,
    medium: 20,
    large: 24,
    xlarge: 32,
    xxlarge: 40,
    xxxlarge: 48,
    huge: 56,
    xhuge: 64,
    xxhuge: 72,
    xxxhuge: 80,
  },
  fontSize: {
    xxsmall: 10,
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 20,
    xlarge: 24,
    xxlarge: 32,
    xxxlarge: 40,
    huge: 48,
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
};

export {theme};
