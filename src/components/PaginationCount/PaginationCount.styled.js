import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';

export const PaginationElement = styled(Pagination)`
  border-radius: ${p => p.theme.radii.s};
  background-color: ${p => p.theme.colors.backgroundWhite};
  box-shadow: ${p => p.theme.shadows.main};

  @media screen and (${p => p.theme.media.large}) {
    max-width: 588px;
    margin-left: auto;
  }

  & .MuiPagination-ul {
    justify-content: center;
    gap: 2px;
    padding: 10px;

    @media screen and (${p => p.theme.media.medium}) {
      gap: 36px;
    }

    @media screen and (${p => p.theme.media.large}) {
      gap: 18px;
    }
  }

  & .MuiButtonBase-root {
    margin: 0;
    padding: 6px;

    width: 40px;
    height: 40px;

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
      width: 64px;
      height: 64px;
    }
  }

  & .MuiPagination-ul .css-1v2lvtn-MuiPaginationItem-root {
    margin: 0;
    padding: 6px 0px;

    @media screen and (${p => p.theme.media.medium}) {
      padding-top: 18px;
      padding-bottom: 18px;
      width: 64px;
      height: 64px;
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
    width: 24px;
    height: 24px;

    color: ${p => p.theme.colors.button};
  }

  & .MuiButtonBase-root .Mui-disabled > svg {
    color: ${p => p.theme.colors.buttonDisabled};
  }
`;
