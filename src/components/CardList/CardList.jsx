import { useSelector } from 'react-redux';
import { selectVisibleEvents } from 'redux/filter/selectors';
import { Card } from 'components/Card';
import { List } from './CardList.styled';

export const CardList = () => {
  const visibleEvents = useSelector(selectVisibleEvents);

  return (
    <List>
      {visibleEvents.map(oneEvent => (
        <li key={oneEvent.id}>
          <Card item={oneEvent} />
        </li>
      ))}
    </List>
  );
};
