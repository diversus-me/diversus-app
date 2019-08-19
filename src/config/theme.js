const colors = {
  accent: '#FE5F55',
  primary: '#242843',
  secondary: '#3398DB',
  black: '#000000',
  white: '#FFFFFF',
  gray: '#7E7E7E',
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 18,
  title: 18,
  header: 16,
  body: 14,
  caption: 12,
};

const fonts = {
  h1: {
    fontFamily: 'Raleway-Light',
    fontSize: sizes.h1,
  },
  h2: {
    fontFamily: 'Raleway-Medium',
    fontSize: sizes.h2,
  },
  h3: {
    fontFamily: 'Raleway-Regular',
    fontSize: sizes.h3,
  },
  header: {
    fontFamily: 'Raleway-Bold',
    fontSize: sizes.header,
  },
  title: {
    fontFamily: 'Raleway-Regular',
    fontSize: sizes.title,
  },
  body: {
    fontSize: sizes.body,
  },
  caption: {
    fontSize: sizes.caption,
  },
  small: {
    fontSize: sizes.small,
  },
};

export {colors, sizes, fonts};
