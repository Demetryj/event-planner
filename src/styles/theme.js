export const theme = {
  colors: {
    //typography
    logo: '#7B61FF',
    mainTitle: '#3F3F3F',
    title: '#1C1B1F',
    text: '#49454F',
    filter: '#3F3F3F',

    bar: '#3F3F3F',
    menu: '#ACA7C3',

    whiteText: '#FFFFFF',
    purpleText: '#7B61FF',

    categoryHight: '#FF2B77',
    categoryMedium: '#E2A300',
    categoryLow: '#6BD475',

    //input
    inputTitle: '#3F3F3F', //
    //inputTitleActive: '#7B61FF',
    inputPlaceholderSearch: '#888888', //
    inputPlaceholder: '#ACA7C3',
    inputText: '#3F3F3F',
    disabledInput: '#ACA7C3', //

    // accentText: '#7B61FF',

    //border
    borderHeader: '#7B61FF',
    borderMenu: '#ACA7C3',
    borderInput: '#ACA7C3',
    borderInputAccent: '#7B61FF',
    borderInputFail: '#FF2B77',
    borderPurple: '#7B61FF',

    iconSearch: '#7B61FF',
    iconLang: '#3F3F3F',
    iconFilter: '#3F3F3F',
    iconInput: '#7B61FF',
    iconDisabled: '#ACA7C3',
    iconInputFail: '#FF2B77',

    backgroundWhite: '#FFFFFF',
    backgroundHeader: '#FEFCFF',

    button: '#7B61FF',
    buttonAccent: '#6243FF',
    buttonDisabled: '#ACA7C3',
  },

  spacing: n => `${4 * n}px`,

  media: {
    mobile: '(min-width: 320px)',
    medium: '(min-width: 768px)',
    large: '(min-width: 1280px)',
    big: '(min-width: 1440px)',
  },
  /* usage
   @media screen and (${(p) => p.theme.media.large}) {
    height: ;
    color: ;
    ...
  }
  */

  breakpoints: {
    xs: '320px',
    md: '768px',
    lg: '1280px',
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
  },

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '24px',
    xl: '32px',
  },

  lineHeights: {
    normal: 'normal',
    s: '1',
    sm: '1.25',
    ml: '1.33',
    m: '1.43',
    l: '1.5',
    xl: '1.71',
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    //medium: '2px solid',
  },

  radii: {
    xs: '4px',
    s: '8px',
    m: '10px',
    l: '12px',
  },

  shadows: {
    main: '2px 4px 9px 0px rgba(166, 141, 174, 0.28)',
    menu: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)',
  },

  transitions: {
    main: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
