import { useSelector } from 'react-redux';
import { selectEvents } from 'redux/events/selectors';
import { Card } from 'components/Card';
import { List } from './CardList.styled';

export const CardList = () => {
  const events = useSelector(selectEvents);

  return (
    <List>
      {events.map(oneEvent => (
        <li key={oneEvent.id}>
          <Card item={oneEvent} />
        </li>
      ))}
    </List>
  );
};
