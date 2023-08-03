import styled from 'styled-components';

export const WrapperMenu = styled.div`
  position: absolute;
  right: ${p =>
    p.variant === 'sortBy' ? p.theme.spacing(20) : p.theme.spacing(14.5)};
  display: flex;
  align-items: center;
  flex-direction: column;

  width: ${p =>
    p.variant === 'sortBy' ? p.theme.spacing(42.5) : p.theme.spacing(39.5)};

  border-radius: ${p => p.theme.radii.s};
  background-color: ${p => p.theme.colors.backgroundWhite};
  box-shadow: ${p => p.theme.shadows.menu};

  @media screen and (${p => p.theme.media.medium}) {
    right: ${p =>
      p.variant === 'sortBy' ? p.theme.spacing(54) : p.theme.spacing(91.5)};
  }
`;

export const WrapperHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
  width: 100%;

  padding-top: ${p => p.theme.spacing(4)};
  padding-bottom: ${p => p.theme.spacing(4)};
  padding-left: ${p =>
    p.variant === 'sortBy' ? p.theme.spacing(6) : p.theme.spacing(4)};
  padding-right: ${p =>
    p.variant === 'sortBy' ? p.theme.spacing(6) : p.theme.spacing(4)};

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};

  color: ${p => p.theme.colors.purpleText};

  & svg {
    width: ${p => p.theme.spacing(6)};
    height: ${p => p.theme.spacing(6)};
  }
`;

export const FilterList = styled.ul`
  width: 100%;
`;

export const FilterItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: ${p => p.theme.spacing(2)};
  padding-bottom: ${p => p.theme.spacing(2)};
  padding-left: ${p =>
    p.variant === 'sortBy' ? p.theme.spacing(6) : p.theme.spacing(4)};
  padding-right: ${p =>
    p.variant === 'sortBy' ? p.theme.spacing(6) : p.theme.spacing(4)};

  border-top: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.borderMenu};

  cursor: pointer;

  & svg {
    color: ${p => p.theme.colors.menu};
    width: ${p => p.theme.spacing(6)};
    height: ${p => p.theme.spacing(6)};
  }
`;

export const FilterName = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.s};

  color: ${p => p.theme.colors.menu};
`;
