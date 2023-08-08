import { useState } from 'react';
import { useRef } from 'react';
import { LangMenu } from 'components/LangMenu';
import { useClickOutside } from 'hooks/useClickOutside';
import {
  WrapperBar,
  WrapperLang,
  Lang,
  ArrowDown,
  ArrowUp,
} from './LangBar.styled';

export const LangBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    setIsOpenMenu(false);
  });

  const handleOpenLangBar = () => setIsOpenMenu(!isOpenMenu);

  return (
    <WrapperBar onClick={handleOpenLangBar} ref={menuRef}>
      <WrapperLang>
        <Lang>UK</Lang>

        {!isOpenMenu ? <ArrowDown /> : <ArrowUp />}
      </WrapperLang>
      {isOpenMenu && <LangMenu />}
    </WrapperBar>
  );
};
