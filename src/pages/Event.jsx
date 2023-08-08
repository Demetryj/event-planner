import { useLocation } from 'react-router-dom';
import { Box } from 'components/Box';
import { ArrowBack } from 'components/ArrowBack';
import { MainTitle } from 'components/MainTitle/';
import { EventInfo } from 'components/EventInfo';

const Event = () => {
  const location = useLocation();

  return (
    <>
      <ArrowBack />
      <Box mx="auto" maxWidth={{ lg: 628 }}>
        <MainTitle>Galery Opening</MainTitle>
        <EventInfo location={location} />
      </Box>
    </>
  );
};

export default Event;
