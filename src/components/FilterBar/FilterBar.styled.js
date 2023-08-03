import styled from 'styled-components';

export const WrapperBar = styled.div`
  position: relative;
  display: flex;
  align-items: 'center';
  justify-content: flex-end;
  gap: ${p => p.theme.spacing(6)};

  margin-bottom: ${p => p.theme.spacing(10)};

  @media screen and (${p => p.theme.media.medium}) {
    gap: ${p => (p.isOpenSort ? p.theme.spacing(55) : p.theme.spacing(6))};
  }
`;

export const Text = styled.p`
  display: none;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.m};

  color: ${p => p.theme.colors.filter};

  @media screen and (${p => p.theme.media.medium}) {
    display: block;
  }
`;

export const BtnAdd = styled.button`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(4)};

  border-radius: ${p => p.theme.radii.s};
  background-color: ${p => p.theme.colors.button};
  box-shadow: ${p => p.theme.shadows.main};

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.buttonAccent};
  }
`;

export const TextBtn = styled.p`
  display: none;

  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-style: inherit;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: inherit;

  color: ${p => p.theme.colors.whiteText};

  @media screen and (${p => p.theme.media.medium}) {
    display: block;
  }
`;
