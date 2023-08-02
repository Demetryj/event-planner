import { Card } from 'components/Card';
import { List } from './CardList.styled';

const array = [0, 1, 2, 3, 4, 5];

export const CardList = () => {
  return (
    <List>
      {array.map(item => (
        <li key={item}>
          <Card />
        </li>
      ))}
    </List>
  );
};
