import styled from 'styled-components';
import card1 from 'images/Art.jpg';
import card2 from 'images/Art@2x.jpg';

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 480px;

  background-image: url(${card1});

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${card2});
  }
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: ${p => p.theme.radii.l};
  box-shadow: ${p => p.theme.shadows.main};

  overflow: hidden;

  cursor: pointer;

  & button {
    display: ${p => (p.status ? 'block' : 'none')};
  }

  &:hover button,
  &:focus button {
    display: block;
  }
`;

export const WrapperEvent = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(3)};
  padding-top: ${p => p.theme.spacing(3)};
  padding-left: ${p => p.theme.spacing(3)};

  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.m};
`;

export const EventType = styled.span`
  display: block;
  padding: ${p => p.theme.spacing(1.5)} ${p => p.theme.spacing(3)};

  color: ${p => p.theme.colors.purpleText};
  border-radius: ${p => p.theme.radii.s};
  background-color: ${p => p.theme.colors.backgroundWhite};
`;

export const Criterion = styled.span`
  display: block;
  padding: ${p => p.theme.spacing(1.5)} ${p => p.theme.spacing(3)};

  border-radius: ${p => p.theme.radii.s};
  background-color: ${p => p.theme.colors.backgroundWhite};
`;

export const DateAndPlace = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};

  background-color: ${p => p.theme.colors.backgroundWhite};
  opacity: 80%;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.xl};

  color: ${p => p.theme.colors.purpleText};
`;

export const BoxAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(4)};

  background-color: ${p => p.theme.colors.backgroundWhite};
`;

export const EventName = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.l};
  color: ${p => p.theme.colors.title};
`;

export const Description = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.m};
  color: ${p => p.theme.colors.text};
`;

export const Button = styled.button`
  display: none;
  margin-left: auto;
  padding: ${p => p.theme.spacing(2.5)} ${p => p.theme.spacing(6)};

  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  font-style: inherit;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.m};
  color: ${p => p.theme.colors.whiteText};

  background-color: ${p => p.theme.colors.button};

  border-radius: ${p => p.theme.radii.s};

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.buttonAccent};
  }
`;
