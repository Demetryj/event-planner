import { useRef } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import { LangList, LangItem, Text } from './LangMenu.styled';

const languages = ['UK', 'EN'];

export const LangMenu = ({ chooseLang, onCloseMenu }) => {
  const menuRef = useRef(null);

  const handleClick = e => {
    chooseLang(e.currentTarget.textContent);
    onCloseMenu(false);
  };

  useClickOutside(menuRef, () => {
    onCloseMenu(false);
  });

  return (
    <LangList ref={menuRef}>
      {languages.map(language => (
        <LangItem id="lang" key={language} onClick={handleClick}>
          <Text>{language}</Text>
        </LangItem>
      ))}
    </LangList>
  );
};
