import styled from 'styled-components';
import bgMain from 'images/bg-mainM.png';
import bgMain2 from 'images/bg-mainM@2x.png';

export const Section = styled.section`
  min-height: calc(100vh - 165px);

  background-image: url(${bgMain});

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMain2});
  }
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (${p => p.theme.media.medium}) {
    min-height: calc(100vh - 96px);
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.spacing(10)};
  padding-bottom: ${p => p.theme.spacing(34)};
  padding-left: ${p => p.theme.spacing(6)};
  padding-right: ${p => p.theme.spacing(6)};
  width: ${p => p.theme.spacing(80)};

  @media screen and (${p => p.theme.media.medium}) {
    padding-left: ${p => p.theme.spacing(10)};
    padding-right: ${p => p.theme.spacing(10)};
    padding-bottom: ${p => p.theme.spacing(31.25)};
    width: ${p => p.theme.spacing(192)};
  }

  @media screen and (${p => p.theme.media.large}) {
    padding-top: ${p => p.theme.spacing(15)};
    padding-left: ${p => p.theme.spacing(20)};
    padding-right: ${p => p.theme.spacing(20)};
    padding-bottom: ${p => p.theme.spacing(19.25)};
    width: ${p => p.theme.spacing(320)};
  }

  @media screen and (${p => p.theme.media.big}) {
    width: ${p => p.theme.spacing(360)};
  }
`;
