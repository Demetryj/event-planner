import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';

export const PaginationElement = styled(Pagination)`
  border-radius: ${p => p.theme.radii.s};
  background-color: ${p => p.theme.colors.backgroundWhite};
  box-shadow: ${p => p.theme.shadows.main};

  @media screen and (${p => p.theme.media.large}) {
    max-width: ${p => p.theme.spacing(147)};
    margin-left: auto;
  }

  & .MuiPagination-ul {
    justify-content: center;
    gap: 2px;
    padding: ${p => p.theme.spacing(2.5)};

    @media screen and (${p => p.theme.media.medium}) {
      gap: ${p => p.theme.spacing(9)};
    }

    @media screen and (${p => p.theme.media.large}) {
      gap: ${p => p.theme.spacing(4.5)};
    }
  }

  & .MuiButtonBase-root {
    margin: 0;
    padding: ${p => p.theme.spacing(1.5)};

    width: ${p => p.theme.spacing(10)};
    height: ${p => p.theme.spacing(10)};

    font-family: inherit;
    font-size: ${p => p.theme.fontSizes.sm};
    font-style: inherit;
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: inherit;
    background-color: transparent;
    color: ${p => p.theme.colors.buttonDisabled};

    &:hover,
    &:focus {
      background-color: transparent;
    }

    @media screen and (${p => p.theme.media.medium}) {
      width: ${p => p.theme.spacing(16)};
      height: ${p => p.theme.spacing(16)};
    }
  }

  & .MuiPagination-ul .css-1v2lvtn-MuiPaginationItem-root {
    margin: 0;
    padding: ${p => p.theme.spacing(1.5)} 0px;

    @media screen and (${p => p.theme.media.medium}) {
      padding-top: ${p => p.theme.spacing(4.5)};
      padding-bottom: ${p => p.theme.spacing(4.5)};
      width: ${p => p.theme.spacing(16)};
      height: ${p => p.theme.spacing(16)};
    }
  }

  & .MuiButtonBase-root.Mui-selected {
    background-color: transparent;
    color: ${p => p.theme.colors.purpleText};

    &:hover,
    &:focus {
      background-color: transparent;
    }
  }

  & .MuiButtonBase-root > svg {
    width: ${p => p.theme.spacing(6)};
    height: ${p => p.theme.spacing(6)};

    color: ${p => p.theme.colors.button};
  }

  & .MuiButtonBase-root .Mui-disabled > svg {
    color: ${p => p.theme.colors.buttonDisabled};
  }
`;
