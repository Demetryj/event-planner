import styled from 'styled-components';

export const MenuList = styled.ul`
  position: absolute;
  top: ${p => p.theme.spacing(25)};
  padding-left: ${p => p.theme.spacing(4)};
  padding-right: ${p => p.theme.spacing(4)};
  width: 100%;
  z-index: 10;

  background-color: ${p => p.theme.colors.backgroundWhite};
  border-radius: ${p => p.theme.radii.s};
  box-shadow: ${p => p.theme.shadows.main};
`;

export const MenuItem = styled.li`
  padding-top: ${p => p.theme.spacing(4)};
  padding-bottom: ${p => p.theme.spacing(4)};

  &:not(:last-child) {
    border-bottom: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.borderMenu};
  }

  color: ${p => p.theme.colors.bar};

  cursor: pointer;

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.purpleText};
    border-color: ${p => p.theme.colors.borderPurple};
  }
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.regular};
`;
