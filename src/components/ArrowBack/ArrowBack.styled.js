import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  margin-bottom: ${p => p.theme.spacing(6)};

  & svg {
    width: ${p => p.theme.spacing(6)};
    height: ${p => p.theme.spacing(6)};
    color: ${p => p.theme.colors.purpleText};
  }

  @media screen and (${p => p.theme.media.large}) {
    margin-bottom: ${p => p.theme.spacing(4.5)};
  }
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.fontSizes};
  font-weight: ${p => p.theme.fontWeights.medium};

  color: ${p => p.theme.colors.purpleText};
`;
