import styled from 'styled-components';
import { Field } from 'formik';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

export const Title = styled.p`
  margin-bottom: ${p => p.theme.spacing(2)};

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.s};
  letter-spacing: 0.4px;

  color: ${p =>
    p.name === 'picture'
      ? p.theme.colors.disabledInput
      : p.theme.colors.purpleText};
`;

export const Label = styled.label`
  position: relative;
`;

export const Input = styled(Field)`
  margin-bottom: ${p => p.theme.spacing(5)};
  padding-top: ${p => p.theme.spacing(4)};
  padding-bottom: ${p => p.theme.spacing(4)};
  padding-left: ${p => p.theme.spacing(3)};
  padding-right: ${p => p.theme.spacing(9)};

  width: calc(100% - 50px);

  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-style: inherit;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.l};
  color: ${p => p.theme.colors.inputText};

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.s};
  border-color: ${p => p.theme.colors.borderPurple};

  &::placeholder {
    font-family: inherit;
    font-size: ${p => p.theme.fontSizes.m};
    font-style: inherit;
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.lineHeights.l};

    color: ${p =>
      p.isOpen ? p.theme.colors.purpleText : p.theme.colors.inputPlaceholder};
  }

  &:placeholder-shown {
    border-color: ${p => p.theme.colors.borderInput};
  }
`;

export const ArrowDown = styled(MdOutlineKeyboardArrowDown)`
  position: absolute;
  width: ${p => p.theme.spacing(6)};
  height: ${p => p.theme.spacing(6)};
  color: ${p =>
    p.name === 'picture'
      ? p.theme.colors.iconDisabled
      : p.theme.colors.iconInput};

  transform: translate(
    ${p => p.theme.spacing(-10)},
    ${p => p.theme.spacing(4.25)}
  );

  cursor: pointer;
`;

export const ArrowUp = styled(MdOutlineKeyboardArrowUp)`
  position: absolute;
  width: ${p => p.theme.spacing(6)};
  height: ${p => p.theme.spacing(6)};
  color: ${p => p.theme.colors.iconInput};

  transform: translate(
    ${p => p.theme.spacing(-10)},
    ${p => p.theme.spacing(4.25)}
  );

  cursor: pointer;
`;