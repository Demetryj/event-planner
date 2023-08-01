export const theme = {
  colors: {
    //typography
    logo: '#7B61FF',
    mainTitle: '#3F3F3F',
    title: '#1C1B1F',
    text: '#49454F',

    bar: '#3F3F3F',
    menu: '#ACA7C3',

    whiteText: '#FFFFFF',
    purpleText: '#7B61FF',

    categoryHight: '#FF2B77',
    categoryMedium: '#E2A300',
    categoryLow: '#6BD475',

    //input
    inputTitle: '#3F3F3F',
    //inputTitleActive: '#7B61FF',
    inputPlaceholderSearch: '#888888', //
    inputPlaceholder: '#ACA7C3',
    inputText: '#3F3F3F',
    disabledInput: '#ACA7C3', //

    accentText: '#7B61FF',

    //border
    borderMenu: '#ACA7C3',
    borderInput: '#ACA7C3',
    borderInputAccent: '#7B61FF',
    borderInputFail: '#FF2B77',

    iconSearch: '#7B61FF',
    iconInput: '#7B61FF',
    iconInputFail: '#FF2B77',

    backgroundWhite: '#FFFFFF',

    button: '#7B61FF',
    buttonAccent: '#6243FF',
  },

  spacing: n => `${2 * n}px`,

  media: {
    mobile: '(min-width: 320px)',
    medium: '(min-width: 768px)',
    large: '(min-width: 1280px)',
  },
  /* usage
   @media screen and (${(p) => p.theme.media.large}) {
    height: ;
    color: ;
    ...
  }
  */

  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
  },

  fontSizes: {
    s: '14px',
    m: '16px',
    l: '32px',
  },

  lineHeights: {
    subheader: '1',
    content: '1.33',
    extraContent: '1.29',
    btnText: '1.12',
    description: '1.25',
    time: '1.4',
    headerLinks: '1.6',
    userLink: '1.7',
    searchSelect: '1.5',
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    medium: '2px solid',
  },

  radii: {
    s: '8px',
    m: '10px',
    l: '12px',
  },

  shadows: {
    main: '2px 4px 9px 0px rgba(166, 141, 174, 0.28)',
  },

  transitions: {
    main: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
