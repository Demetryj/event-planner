import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.spacing(6)};

  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semiBold};

  color: ${p => p.theme.colors.mainTitle};

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.xl};
  }

  @media screen and (${p => p.theme.media.large}) {
    margin-bottom: ${p =>
      p.display !== 'desktop' ? p.theme.spacing(2.4) : p.theme.spacing(0)};
  }
`;
