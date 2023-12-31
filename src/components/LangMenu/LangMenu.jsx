import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useClickOutside } from 'hooks/useClickOutside';
import { LangList, LangItem, Text } from './LangMenu.styled';

const languages = ['UK', 'EN'];

export const LangMenu = ({ chooseLang, onCloseMenu }) => {
  const menuRef = useRef(null);

  const { i18n } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  const handleClick = e => {
    chooseLang(e.currentTarget.textContent);
    onCloseMenu(false);

    switch (e.currentTarget.textContent) {
      case 'EN':
        changeLanguage('en');
        return;

      case 'UK':
        changeLanguage('uk');
        return;

      default:
        return;
    }
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
