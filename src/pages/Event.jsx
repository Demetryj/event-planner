import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectEvents } from 'redux/events/selectors';
import { Box } from 'components/Box';
import { ArrowBack } from 'components/ArrowBack';
import { MainTitle } from 'components/MainTitle/';
import { EventInfo } from 'components/EventInfo';
import { getEventById } from 'utils/getEventById';

const Event = () => {
  const { id } = useParams();
  const events = useSelector(selectEvents);
  const location = useLocation();
  const eventData = getEventById(events, id);

  return (
    <>
      <ArrowBack />
      <Box mx="auto" maxWidth={{ lg: 628 }}>
        <MainTitle>{eventData.title}</MainTitle>
        <EventInfo location={location} data={eventData} />
      </Box>
    </>
  );
};

export default Event;
