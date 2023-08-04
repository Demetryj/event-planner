import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

export const Header = styled.header`
  width: 100%;
  background-color: ${p => p.theme.colors.backgroundHeader};
  border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.borderHeader};
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  padding: ${p => p.theme.spacing(6)};
  width: ${p => p.theme.spacing(80)};

  @media screen and (${p => p.theme.media.medium}) {
    flex-wrap: nowrap;
    padding-top: ${p => p.theme.spacing(6)};
    padding-bottom: ${p => p.theme.spacing(5.5)};
    padding-left: ${p => p.theme.spacing(10)};
    padding-right: ${p => p.theme.spacing(10)};
    width: ${p => p.theme.spacing(192)};
  }

  @media screen and (${p => p.theme.media.large}) {
    padding-left: ${p => p.theme.spacing(20)};
    padding-right: ${p => p.theme.spacing(20)};
    width: ${p => p.theme.spacing(320)};
  }

  @media screen and (${p => p.theme.media.big}) {
    width: ${p => p.theme.spacing(360)};
  }
`;

export const Logo = styled(Link)`
  font-family: 'Alata', sans-serif;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.logo};
`;

export const Lable = styled.label`
  position: relative;
  order: 1;
  margin-top: ${p => p.theme.spacing(6)};

  @media screen and (${p => p.theme.media.medium}) {
    order: 0;
    margin-top: 0;
    margin-left: auto;
    margin-right: ${p => p.theme.spacing(6)};
  }
`;

export const Input = styled.input`
  padding-top: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(3)};
  padding-right: ${p => p.theme.spacing(12)};
  padding-left: ${p => p.theme.spacing(12)};
  width: calc(100% - ${p => p.theme.spacing(24)});
  font-size: ${p => p.theme.fontSizes.s};

  line-height: ${p => p.theme.lineHeights.s};

  color: ${p => p.theme.colors.purpleText};
  background-color: ${p => p.theme.colors.backgroundWhite};
  border-radius: ${p => p.theme.radii.s};
  box-shadow: ${p => p.theme.shadows.main};

  @media screen and (${p => p.theme.media.medium}) {
    width: ${p => p.theme.spacing(68)};
  }

  @media screen and (${p => p.theme.media.large}) {
    width: ${p => p.theme.spacing(78.5)};
  }

  &::placeholder {
    font-weight: ${p => p.theme.fontWeights.light};
    line-height: inherit;
    color: ${p => p.theme.colors.inputPlaceholderSearch};
  }
`;

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: ${p => p.theme.spacing(3)};
  left: ${p => p.theme.spacing(3)};
  width: ${p => p.theme.spacing(6)};
  height: ${p => p.theme.spacing(6)};
  color: ${p => p.theme.colors.iconSearch};
`;

export const RemoveIcon = styled(IoMdClose)`
  position: absolute;
  top: ${p => p.theme.spacing(3)};
  right: ${p => p.theme.spacing(3)};
  width: ${p => p.theme.spacing(6)};
  height: ${p => p.theme.spacing(6)};
  color: ${p => p.theme.colors.iconSearch};

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const LangBar = styled.div`
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
