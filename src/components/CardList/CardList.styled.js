import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${p => p.theme.spacing(68)}, 1fr)
  );
  grid-auto-flow: row;
  grid-gap: ${p => p.theme.spacing(6)};

  margin-top: 0;
  margin-bottom: ${p => p.theme.spacing(10)};
  margin-left: auto;
  margin-right: auto;
  padding: 0;

  @media screen and (${p => p.theme.media.large}) {
    margin-bottom: ${p => p.theme.spacing(8)};
  }
`;
