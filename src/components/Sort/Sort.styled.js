import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(4)};

  border-radius: ${p => p.theme.radii.s};
  background-color: ${p => p.theme.colors.backgroundWhite};
  box-shadow: ${p => p.theme.shadows.main};

  cursor: pointer;

  & svg {
    width: ${p => p.theme.spacing(6)};
    height: ${p => p.theme.spacing(6)};

    color: ${p => p.theme.colors.iconFilter};

    transition: ${p => p.theme.transitions.main};
  }

  & p {
    transition: ${p => p.theme.transitions.main};
  }

  &:hover svg,
  &:focus svg {
    color: ${p => p.theme.colors.purpleText};
  }

  &:hover p,
  &:focus p {
    color: ${p => p.theme.colors.purpleText};
  }

  @media screen and (${p => p.theme.media.medium}) {
    /* display: block; */
  }
`;
