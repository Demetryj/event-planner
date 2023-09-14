import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { deleteEvent } from 'redux/events/eventsSlice';
import imgDefault from 'images/default-W@2x.jpg';
import {
  Wrapper,
  WrapperImg,
  WrapperInfo,
  Description,
  WrapperCont,
  Info,
  Priority,
  WrapperButton,
  BtnEdit,
  BtnDelete,
} from './EventInfo.styled';

export const EventInfo = ({ location, data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const {
    id,
    description,
    date,
    time,
    location: place,
    category,
    priority,
    picture,
  } = data;

  const isDefaultImg = picture.includes('default');

  const handleDeleteEvent = () => {
    dispatch(deleteEvent(id));
    navigate('/', { replace: true });
  };

  return (
    <Wrapper>
      <WrapperImg picture={isDefaultImg ? imgDefault : picture}></WrapperImg>
      <WrapperInfo>
        <Description>{description}</Description>

        <WrapperCont>
          <Info>{category}</Info>
          <Priority variant={priority}>{priority}</Priority>
          <Info>{place}</Info>
          <Info>{`${date} at ${time}`}</Info>
        </WrapperCont>

        <WrapperButton>
          <Link to={`/edit-event/${id}`} state={{ from: location }}>
            <BtnEdit type="button">{t('event.editBtn')}</BtnEdit>
          </Link>

          <BtnDelete type="button" onClick={handleDeleteEvent}>
            {t('event.deleteBtn')}
          </BtnDelete>
        </WrapperButton>
      </WrapperInfo>
    </Wrapper>
  );
};
