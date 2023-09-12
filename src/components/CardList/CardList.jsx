import { Card } from 'components/Card';
import { List } from './CardList.styled';

export const CardList = ({ visibleEvents }) => {
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
