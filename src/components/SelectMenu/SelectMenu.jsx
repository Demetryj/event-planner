import { MenuList, MenuItem, Text } from './SelectMenu.styled';

export const SelectMenu = ({ array, closeMenu, values, name }) => {
  const handleClick = e => {
    values[name] = e.target.textContent;
    closeMenu(false);
  };
  return (
    <MenuList>
      {array.map(item => (
        <MenuItem key={item} onClick={handleClick}>
          <Text>{item}</Text>
        </MenuItem>
      ))}
    </MenuList>
  );
};
