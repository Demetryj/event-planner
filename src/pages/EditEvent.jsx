import {
  // useDispatch,
  useSelector,
} from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ArrowBack } from 'components/ArrowBack';
import { MainTitle } from 'components/MainTitle';
import { EditForm } from 'components/EventForm';
import { editSchema } from 'data/editSchema';
import { selectEvents } from 'redux/events/selectors';
import { getEventById } from 'utils/getEventById';

const EditEvent = () => {
  const { id } = useParams();
  const events = useSelector(selectEvents);
  // const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const event = getEventById(events, id);
  const updateEvent = () => {
    navigate(`/event/${id}`);
  };

  const initialValues = { ...event, picture: '' };

  return (
    <>
      <ArrowBack />
      <MainTitle>Edit event</MainTitle>
      <EditForm
        initialValues={initialValues}
        editSchema={editSchema}
        typeForm="Save"
        location={location}
        onButtonClick={updateEvent}
      />
    </>
  );
};

export default EditEvent;
