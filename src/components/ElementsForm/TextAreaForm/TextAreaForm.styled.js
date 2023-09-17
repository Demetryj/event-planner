import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

export const WrapperTextArea = styled.div`
  position: relative;
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.spacing(2)};

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.s};
  letter-spacing: 0.4px;

  color: ${p => p.theme.colors.purpleText};
`;

export const TextArea = styled.textarea`
  padding-top: ${p => p.theme.spacing(4)};
  padding-bottom: ${p => p.theme.spacing(4)};
  padding-left: ${p => p.theme.spacing(3)};
  padding-right: ${p => p.theme.spacing(10)};

  width: 100%;
  height: ${p => p.theme.spacing(39)};

  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  font-style: inherit;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.m};
  letter-spacing: 0.25px;
  color: ${p => p.theme.colors.inputText};

  resize: none;

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.s};
  border-color: ${p => {
    if (p.err) {
      return p.theme.colors.borderInputFail;
    } else {
      return p.theme.colors.borderPurple;
    }
  }};

  &:placeholder-shown {
    border-color: ${p => !p.err && p.theme.colors.borderInput};
  }

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
  top: ${p => p.theme.spacing(10)};
  right: ${p => p.theme.spacing(4.25)};

  width: ${p => p.theme.spacing(6)};
  height: ${p => p.theme.spacing(6)};

  color: ${p => {
    if (p.disabled) {
      return p.theme.colors.iconDisabled;
    } else if (p.err) {
      return p.theme.colors.iconInputFail;
    } else {
      return p.theme.colors.iconInput;
    }
  }};

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;
