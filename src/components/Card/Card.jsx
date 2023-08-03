import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  WrapperCard,
  WrapperEvent,
  EventType,
  Criterion,
  DateAndPlace,
  Text,
  BoxAbout,
  EventName,
  Description,
  Button,
} from './Card.styled';

export const Card = ({
  item: {
    id,
    title,
    description,
    date,
    time,
    location: place,
    category,
    priority,
    picture,
  },
}) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <WrapperCard onClick={handleClick} picture={picture}>
      <WrapperEvent>
        <EventType>{category}</EventType>
        <Criterion variant={priority}>{priority}</Criterion>
      </WrapperEvent>

      <div>
        <DateAndPlace>
          <Text>{`${date} at ${time}`}</Text>
          <Text>{place}</Text>
        </DateAndPlace>

        <BoxAbout>
          <EventName>{title}</EventName>
          <Description>{description}</Description>

          <Link to={`/event/${id}`} state={{ from: location }}>
            <Button type="button" status={isActive}>
              More info
            </Button>
          </Link>
        </BoxAbout>
      </div>
    </WrapperCard>
  );
};
