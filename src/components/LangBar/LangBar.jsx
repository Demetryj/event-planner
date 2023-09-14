import { useState } from 'react';
import { LangMenu } from 'components/LangMenu';

import {
  WrapperBar,
  WrapperLang,
  Lang,
  ArrowDown,
  ArrowUp,
} from './LangBar.styled';

export const LangBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [lang, setLang] = useState('EN');

  const handleOpenLangBar = () => setIsOpenMenu(!isOpenMenu);

  return (
    <WrapperBar onClick={handleOpenLangBar}>
      <WrapperLang>
        <Lang>{lang}</Lang>

        {!isOpenMenu ? <ArrowDown /> : <ArrowUp />}
      </WrapperLang>
      {isOpenMenu && (
        <LangMenu chooseLang={setLang} onCloseMenu={setIsOpenMenu} />
      )}
    </WrapperBar>
  );
};
