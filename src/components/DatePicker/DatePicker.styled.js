import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

export const Wrapper = styled.div`
  position: absolute;
  top: ${p => p.theme.spacing(25)};
  padding: ${p => p.theme.spacing(5)};
  width: 100%;
  z-index: 10;

  background-color: ${p => p.theme.colors.backgroundWhite};
  box-shadow: ${p => p.theme.shadows.calendar};

  border-radius: ${p => p.theme.radii.l};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${p => p.theme.spacing(6)};
`;

export const Table = styled.table`
  margin-bottom: ${p => p.theme.spacing(4)};
`;

export const MonthYear = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.m};

  color: ${p => p.theme.colors.bar};
`;

export const ArrowLeft = styled(IoIosArrowBack)`
  width: ${p => p.theme.spacing(5)};
  height: ${p => p.theme.spacing(5)};

  color: ${p => p.theme.colors.bar};

  transition: color 500ms;

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.purple};
  }
`;

export const ArrowRight = styled(IoIosArrowForward)`
  width: ${p => p.theme.spacing(5)};
  height: ${p => p.theme.spacing(5)};

  color: ${p => p.theme.colors.bar};

  transition: color 250ms;

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.purple};
  }
`;

export const DayOfWeek = styled.th`
  padding-bottom: ${p => p.theme.spacing(6)};
  width: ${p => p.theme.spacing(7)};

  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.ml};
  text-align: center;

  color: ${p =>
    p.day === 'Sun' || p.day === 'Sat' || p.day === 'Нд' || p.day === 'Сб'
      ? p.theme.colors.pink
      : p.theme.colors.bar};

  @media screen and (${p => p.theme.media.medium}) {
    width: ${p => p.theme.spacing(9.5)};
  }

  @media screen and (${p => p.theme.media.large}) {
    width: ${p => p.theme.spacing(11.75)};
  }
`;

export const DateNumber = styled.td`
  padding: ${p => p.theme.spacing(2)} 0;

  font-family: 'Inter', sans-serif;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.ml};
  text-align: center;

  color: ${p => {
    if (p.isSelected) {
      return p.theme.colors.whiteText;
    } else if (p.isCurrent) {
      return p.theme.colors.purple;
    } else {
      return p.theme.colors.menu;
    }
  }};

  background-color: ${p => p.isSelected && p.theme.colors.purple};

  cursor: ${p => p.date && 'pointer'};
`;

export const ButtonCancel = styled.button`
  margin-right: ${p => p.theme.spacing(3.95)};
  padding: ${p => p.theme.spacing(1.75)} ${p => p.theme.spacing(3.75)};

  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.xs};
  font-style: inherit;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.ml};

  color: ${p => p.theme.colors.purpleText};
  background-color: transparent;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.borderPurple};
  border-radius: ${p => p.theme.radii.xs};

  transition: all 250ms;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.pink};
    border-color: ${p => p.theme.colors.pink};
  }
`;

export const ButtonChooseDate = styled.button`
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};

  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.xs};
  font-style: inherit;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.ml};

  color: ${p => p.theme.colors.whiteText};
  background-color: ${p => p.theme.colors.button};

  border-radius: ${p => p.theme.radii.xs};

  transition: background-color 250ms;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.buttonAccent};
  }
`;
