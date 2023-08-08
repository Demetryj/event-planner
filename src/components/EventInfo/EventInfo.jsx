import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { selectEvents } from 'redux/events/selectors';
import { deleteEvent } from 'redux/events/eventsSlice';
import { getEventById } from 'utils/getEventById';
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

export const EventInfo = ({ location }) => {
  const { id } = useParams();
  const events = useSelector(selectEvents);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = getEventById(events, id);
  const {
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
            <BtnEdit type="button">Edit</BtnEdit>
          </Link>

          <BtnDelete type="button" onClick={handleDeleteEvent}>
            Delete event
          </BtnDelete>
        </WrapperButton>
      </WrapperInfo>
    </Wrapper>
  );
};
