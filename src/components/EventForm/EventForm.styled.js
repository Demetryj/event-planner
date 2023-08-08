import styled from 'styled-components';
import { Form } from 'formik';

export const FormWrap = styled(Form)`
  padding: ${p => p.theme.spacing(10)} ${p => p.theme.spacing(4)};

  border-radius: ${p => p.theme.radii.s};
  box-shadow: ${p => p.theme.shadows.main};
  background-color: ${p => p.theme.colors.backgroundWhite};

  @media screen and (${p => p.theme.media.medium}) {
    padding-left: ${p => p.theme.spacing(6)};
    padding-right: ${p => p.theme.spacing(6)};
  }

  @media screen and (${p => p.theme.media.large}) {
    padding-top: ${p => p.theme.spacing(10)};
    padding-bottom: ${p => p.theme.spacing(13.5)};
    padding-left: ${p => p.theme.spacing(10)};
    padding-right: ${p => p.theme.spacing(10)};
  }
`;

export const Button = styled.button`
  display: block;
  margin-top: ${p => p.theme.spacing(10)};
  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.spacing(4)};
  padding-bottom: ${p => p.theme.spacing(4)};
  width: 100%;

  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-style: inherit;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: inherit;

  color: ${p => p.theme.colors.whiteText};

  background-color: ${p =>
    p.disabled ? p.theme.colors.buttonDisabled : p.theme.colors.button};
  border-radius: ${p => p.theme.radii.s};

  @media screen and (${p => p.theme.media.medium}) {
    margin-right: 0;
    width: ${p => p.theme.spacing(48.25)};
  }

  @media screen and (${p => p.theme.media.large}) {
    margin-top: ${p => p.theme.spacing(15)};
  }

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${p => !p.disabled && p.theme.colors.buttonAccent};
  }
`;
