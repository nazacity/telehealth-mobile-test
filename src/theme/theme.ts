import {Dimensions, Platform} from 'react-native';
import {s} from 'react-native-size-matters';
const {width, height} = Dimensions.get('screen');

export const COLORS = {
  primary: '#3C6CE7',
  secondary: '#00A79D',
  white: '#fff',
  black: '#000',
  gray: {
    0: '#f7f7f7',
    1: '#e0e0e0',
    2: '#A4A4A4',
    3: '#767676',
    4: '#696969',
    5: '#3f3f3f',
  },
  blue: {
    1: '#ECF3FF',
    2: '#C4DAFF',
    3: '#6699CC',
    4: '#4482C1',
    5: '#2A547E',
  },
  red: {
    1: '#ffcccc',
    2: '#ff9999',
    3: '#ff4c4c',
    4: '#ff3232',
    5: '#ff0000',
  },
  green: {
    1: '#eef7e9',
    2: '#cce8bf',
    3: '#99d180',
    4: '#76c256',
    5: '#00B900',
  },
  orange: {
    1: '#fff3cc',
    2: '#ffe899',
    3: '#ffdc66',
    4: '#ffd132',
    5: '#ffc600',
  },
  transparent: {
    1: 'rgba(0,0,0,0.0)',
    2: 'rgba(0,0,0,0.1)',
    3: 'rgba(0,0,0,0.4)',
    4: 'rgba(0,0,0,0.6)',
    5: 'rgba(0,0,0,0.9)',
  },
  background: {
    default: '#f7f7f7',
  },
  text: {
    default: '#464646',
  },
};

export const SIZES = {screenWidth: width, screenHeight: height};

export const FONT_FAMILY = {
  BOLD: 'Noto Sans Thai SemiCondensed SemiBold',
  SEMI: 'Noto Sans Thai SemiCondensed Regular',
  REGULAR: 'Noto Sans Thai Light',
};

export const FONTS = {
  h1: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: s(30),
    ...(Platform.OS === 'ios' && {lineHeight: s(40)}),
  },
  h2: {
    fontFamily: FONT_FAMILY.SEMI,
    fontSize: s(24),
    ...(Platform.OS === 'ios' && {lineHeight: s(36)}),
  },
  h3: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: s(18),
    ...(Platform.OS === 'ios' && {lineHeight: s(28)}),
  },
  h4: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: s(14),
    ...(Platform.OS === 'ios' && {lineHeight: s(24)}),
  },
  h5: {
    fontFamily: FONT_FAMILY.SEMI,
    fontSize: s(12),
    ...(Platform.OS === 'ios' && {lineHeight: s(22)}),
  },
  title: {
    fontFamily: FONT_FAMILY.SEMI,
    fontSize: s(18),
    ...(Platform.OS === 'ios' && {lineHeight: s(28)}),
  },
  body1: {
    fontFamily: FONT_FAMILY.SEMI,
    fontSize: s(16),
    ...(Platform.OS === 'ios' && {lineHeight: s(24)}),
  },
  body2: {
    fontFamily: FONT_FAMILY.SEMI,
    fontSize: s(14),
    ...(Platform.OS === 'ios' && {lineHeight: s(22)}),
  },
};

export const SHADOW = {
  0: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,

    elevation: 0,
  },
  1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  3: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  4: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  5: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  6: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  7: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  8: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  9: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  10: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
};
