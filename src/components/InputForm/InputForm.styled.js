import styled from 'styled-components';
import { Field } from 'formik';
import { IoMdClose } from 'react-icons/io';

export const Title = styled.p`
  margin-bottom: ${p => p.theme.spacing(2)};

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.s};
  letter-spacing: 0.4px;

  color: ${p => p.theme.colors.purpleText};
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

  width: ${p => (p.as === 'textarea' ? '100%' : 'calc(100% - 50px)')};
  height: ${p => p.as === 'textarea' && p.theme.spacing(39)};
  resize: ${p => p.as === 'textarea' && 'none'};

  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-style: inherit;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.l};
  color: ${p => p.theme.colors.inputText};

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.s};
  border-color: ${p => p.theme.colors.borderInput};

  &::placeholder {
    font-family: inherit;
    font-size: ${p => p.theme.fontSizes.m};
    font-style: inherit;
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.lineHeights.l};

    color: ${p => p.theme.colors.inputPlaceholder};
  }
`;

export const RemoveIcon = styled(IoMdClose)`
  position: absolute;
  width: ${p => p.theme.spacing(6)};
  height: ${p => p.theme.spacing(6)};

  transform: translate(
    ${p => p.theme.spacing(-10)},
    ${p => p.theme.spacing(4.25)}
  );

  color: ${p =>
    p.disabled ? p.theme.colors.iconDisabled : p.theme.colors.iconInput};

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;
