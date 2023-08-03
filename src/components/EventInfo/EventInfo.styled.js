import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: ${p => p.theme.radii.s};
  box-shadow: ${p => p.theme.shadows.main};
  overflow: hidden;
`;

export const WrapperImg = styled.div`
  height: ${p => p.theme.spacing(42)};
  background-image: url(${p => p.picture});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${p => p.theme.radii.s};

  @media screen and (${p => p.theme.media.medium}) {
    height: ${p => p.theme.spacing(68)};
  }
`;

export const WrapperInfo = styled.div`
  padding-top: ${p => p.theme.spacing(6)};
  padding-bottom: ${p => p.theme.spacing(10)};
  padding-left: ${p => p.theme.spacing(4)};
  padding-right: ${p => p.theme.spacing(4)};
  background-color: ${p => p.theme.colors.backgroundWhite};
`;

export const Description = styled.p`
  margin-bottom: ${p => p.theme.spacing(6)};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.m};

  color: ${p => p.theme.colors.text};
`;

export const WrapperCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(3)};
  margin-bottom: ${p => p.theme.spacing(10)};
`;

export const Info = styled.span`
  padding: ${p => p.theme.spacing(1.5)} ${p => p.theme.spacing(3)};

  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.m};

  color: ${p => p.theme.colors.purpleText};

  background-color: ${p => p.theme.colors.backgroundWhite};
  border-radius: ${p => p.theme.radii.s};
  box-shadow: ${p => p.theme.shadows.main};
`;

export const Priority = styled.span`
  padding: ${p => p.theme.spacing(1.5)} ${p => p.theme.spacing(3)};

  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.m};

  color: ${p => {
    if (p.variant === 'High') {
      return p.theme.colors.categoryHight;
    } else if (p.variant === 'Medium') {
      return p.theme.colors.categoryMedium;
    } else {
      return p.theme.colors.categoryLow;
    }
  }};

  background-color: ${p => p.theme.colors.backgroundWhite};
  border-radius: ${p => p.theme.radii.s};
  box-shadow: ${p => p.theme.shadows.main};
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (${p => p.theme.media.medium}) {
    gap: ${p => p.theme.spacing(4)};
    justify-content: flex-end;
  }
`;

export const BtnEdit = styled.button`
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(10.6)};

  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-style: inherit;
  line-height: ${p => p.theme.lineHeights.ml};

  color: ${p => p.theme.colors.purpleText};

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.xs};
  border-color: ${p => p.theme.borders.borderPurple};
  background-color: ${p => p.theme.colors.backgroundWhite};

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    box-shadow: ${p => p.theme.shadows.main};
  }
`;

export const BtnDelete = styled.button`
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};

  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-style: inherit;
  line-height: ${p => p.theme.lineHeights.ml};

  color: ${p => p.theme.colors.whiteText};

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.xs};
  border-color: transparent;
  background-color: ${p => p.theme.colors.button};

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.buttonAccent};
  }
`;
