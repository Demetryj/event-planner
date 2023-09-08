import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useClickOutside } from 'hooks/useClickOutside';
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
  LinkButton,
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

  const cardRef = useRef(null);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useClickOutside(cardRef, () => {
    setIsActive(false);
  });

  return (
    <WrapperCard ref={cardRef} onClick={handleClick} picture={picture}>
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

          <LinkButton
            to={`event/${id}`}
            state={{ from: location }}
            isActive={isActive}
          >
            <Button type="button">More info</Button>
          </LinkButton>
        </BoxAbout>
      </div>
    </WrapperCard>
  );
};
