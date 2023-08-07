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

  const handleOpenLangBar = () => setIsOpenMenu(!isOpenMenu);

  return (
    <WrapperBar>
      <WrapperLang>
        <Lang>UK</Lang>

        {!isOpenMenu ? (
          <ArrowDown onClick={handleOpenLangBar} />
        ) : (
          <ArrowUp onClick={handleOpenLangBar} />
        )}
      </WrapperLang>
      {isOpenMenu && <LangMenu />}
    </WrapperBar>
  );
};
