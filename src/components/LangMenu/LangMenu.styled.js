import styled from 'styled-components';

export const LangList = styled.ul`
  position: absolute;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};
  z-index: 10;

  padding: ${p => p.theme.spacing(4)} ${p => p.theme.spacing(2)};

  border-radius: ${p => p.theme.radii.s};
  box-shadow: ${p => p.theme.shadows.main};
  background-color: ${p => p.theme.colors.backgroundWhite};
`;

export const LangItem = styled.li`
  padding-bottom: ${p => p.theme.spacing(1)};
  width: 48px;

  border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.borderMenu};

  cursor: pointer;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.sm};
  color: ${p => p.theme.colors.menu};
`;
