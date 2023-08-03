import { useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { selectEvents } from 'redux/events/selectors';
import { getEventById } from 'utils/getEventById';
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

export const EventInfo = () => {
  const { id } = useParams();
  const events = useSelector(selectEvents);
  const location = useLocation();

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

  return (
    <Wrapper>
      <WrapperImg picture={picture}></WrapperImg>
      <WrapperInfo>
        <Description>{description}</Description>

        <WrapperCont>
          <Info>{category}</Info>
          <Priority variant={priority}>{priority}</Priority>
          <Info>{place}</Info>
          <Info>{`${date} at ${time}`}</Info>
        </WrapperCont>

        <WrapperButton>
          <Link to="/edit-event" state={{ from: location }}>
            <BtnEdit type="button">Edit</BtnEdit>
          </Link>

          <BtnDelete type="button">Delete event</BtnDelete>
        </WrapperButton>
      </WrapperInfo>
    </Wrapper>
  );
};
