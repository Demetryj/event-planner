import { useState } from 'react';
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

export const Card = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <WrapperCard onClick={handleClick} status={isActive}>
      <WrapperEvent>
        <EventType>Art</EventType>
        <Criterion>High</Criterion>
      </WrapperEvent>

      <div>
        <DateAndPlace>
          <Text>{`12.07 at 12:00`}</Text>
          <Text>Kyiv</Text>
        </DateAndPlace>

        <BoxAbout>
          <EventName>Galery Opening</EventName>
          <Description>
            Discover an enchanting evening celebrating the world of art at our
            exclusive gallery opening.
          </Description>

          <Link to="/event">
            <Button type="button" status={isActive}>
              More info
            </Button>
          </Link>
        </BoxAbout>
      </div>
    </WrapperCard>
  );
};
