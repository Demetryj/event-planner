import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowBack } from 'components/ArrowBack';
import { MainTitle } from 'components/MainTitle';
import { EditForm } from 'components/EventForm';
import { editSchema } from 'data/editSchema';
import { selectEvents } from 'redux/events/selectors';
import { getEventById } from 'utils/getEventById';
import { updateEvent } from 'redux/events/eventsSlice';

const EditEvent = () => {
  const { id } = useParams();
  const events = useSelector(selectEvents);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const event = getEventById(events, id);

  const { t } = useTranslation();

  const initialValues = { ...event, picture: '' };

  const changeEvent = values => {
    const changedEvent = { ...values, picture: event.picture, id: event.id };

    dispatch(updateEvent(changedEvent));
    navigate(`/event/${id}`);
  };

  return (
    <>
      <ArrowBack />
      <MainTitle>{t('editEvent.mainTitle')}</MainTitle>
      <EditForm
        initialValues={initialValues}
        editSchema={editSchema}
        typeForm={t('editEvent.button')}
        location={location}
        onButtonClick={changeEvent}
      />
    </>
  );
};

export default EditEvent;
