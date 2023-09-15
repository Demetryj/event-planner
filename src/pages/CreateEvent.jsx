import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { ArrowBack } from 'components/ArrowBack';
import { MainTitle } from 'components/MainTitle';
import { EditForm } from 'components/EventForm';
import { addEvent } from 'redux/events/eventsSlice';
import { editSchema } from 'data/editSchema';
import imgDefault from 'images/default-H@2x.jpg';

const initialValues = {
  title: '',
  description: '',
  date: '',
  time: '',
  location: '',
  category: '',
  picture: '',
  priority: '',
};

const CreateEvent = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { t } = useTranslation();

  const createNewEvent = values => {
    const newEvent = { ...values, picture: imgDefault, id: nanoid() };
    dispatch(addEvent(newEvent));
  };

  return (
    <>
      <ArrowBack />
      <MainTitle>{t('mainTitles.createEvent')}</MainTitle>
      <EditForm
        initialValues={initialValues}
        editSchema={editSchema}
        typeForm={t('eventForm.buttonAdd')}
        location={location}
        onButtonClick={createNewEvent}
      />
    </>
  );
};

export default CreateEvent;
