import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 480px;

  background-image: url(${p => p.picture});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: ${p => p.theme.radii.l};
  box-shadow: ${p => p.theme.shadows.main};

  overflow: hidden;

  cursor: pointer;
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

  color: ${p => {
    if (p.variant === 'High' || p.variant === 'Високий') {
      return p.theme.colors.categoryHight;
    } else if (p.variant === 'Medium' || p.variant === 'Середній') {
      return p.theme.colors.categoryMedium;
    } else {
      return p.theme.colors.categoryLow;
    }
  }};

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

export const Text = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.xl};

  color: ${p => p.theme.colors.purpleText};
`;

export const BoxAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(4)};

  min-height: ${p => p.theme.spacing(37)};

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

export const LinkButton = styled(Link)`
  display: ${p => (p.active ? 'block' : 'none')};
  margin-left: auto;
`;

export const Button = styled.button`
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
