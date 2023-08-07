import styled from 'styled-components';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

export const WrapperBar = styled.div`
  position: relative;
`;

export const WrapperLang = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(1)};
  padding-top: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(3)};
  padding-left: ${p => p.theme.spacing(3)};
  padding-right: ${p => p.theme.spacing(1)};

  border-radius: ${p => p.theme.radii.s};
  box-shadow: ${p => p.theme.shadows.main};

  background-color: ${p => p.theme.colors.backgroundWhite};
`;

export const Lang = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.s};

  color: ${p => p.theme.colors.bar};
`;

export const ArrowDown = styled(MdOutlineKeyboardArrowDown)`
  width: ${p => p.theme.spacing(6)};
  height: ${p => p.theme.spacing(6)};
  color: ${p => p.theme.colors.iconLang};
  cursor: pointer;
`;

export const ArrowUp = styled(MdOutlineKeyboardArrowUp)`
  width: ${p => p.theme.spacing(6)};
  height: ${p => p.theme.spacing(6)};
  color: ${p => p.theme.colors.iconLang};
  cursor: pointer;
`;
