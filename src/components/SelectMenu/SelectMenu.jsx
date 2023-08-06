import { MenuList, MenuItem } from './SelectMenu.styled';

export const SelectMenu = ({ array, closeMenu, values, name }) => {
  const handleClick = e => {
    values[name] = e.target.textContent;
    closeMenu(false);
  };
  return (
    <MenuList>
      {array.map(item => (
        <MenuItem key={item} onClick={handleClick}>
          <p>{item}</p>
        </MenuItem>
      ))}
    </MenuList>
  );
};
