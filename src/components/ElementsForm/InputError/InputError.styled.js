import styled from 'styled-components';

export const ErrorText = styled.p`
  position: absolute;
  right: ${p => p.theme.spacing(5)};
  bottom: ${p => p.theme.spacing(-5)};
  text-align: right;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.ml};

  color: ${p => p.theme.colors.errorText};
`;
