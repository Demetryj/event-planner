import styled from 'styled-components';

export const WrapperBar = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: ${p => p.theme.spacing(6)};

  margin-bottom: ${p => p.theme.spacing(10)};

  @media screen and (${p => p.theme.media.medium}) {
    gap: ${p => {
      if (p.currentLang === 'en') {
        return p.isOpenSort ? p.theme.spacing(48.5) : p.theme.spacing(6);
      } else {
        return p.isOpenSort ? p.theme.spacing(59) : p.theme.spacing(6);
      }
    }};
  }

  @media screen and (${p => p.theme.media.large}) {
    margin-bottom: ${p => p.theme.spacing(0)};
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
