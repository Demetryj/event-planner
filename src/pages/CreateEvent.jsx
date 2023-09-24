import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { ArrowBack } from 'components/ArrowBack';
import { MainTitle } from 'components/MainTitle';
import { EditForm } from 'components/EventForm';
import { addEvent } from 'redux/events/eventsSlice';
import { editSchema } from 'data/editSchema';
import { clearCastomInputs } from 'utils/clearCastomInputs';
import imgDefault from 'images/default-H@2x.jpg';

const CreateEvent = () => {
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
  const dispatch = useDispatch();
  const location = useLocation();
  const { t } = useTranslation();

  const createNewEvent = values => {
    const newEvent = {
      id: nanoid(),
      ...values,
      picture: imgDefault,
    };
    dispatch(addEvent(newEvent));
    clearCastomInputs(['category', 'priority', 'date', 'time'], values);
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
