import { useState } from 'react';
import { LangMenu } from 'components/LangMenu';
import {
  Header,
  Container,
  Logo,
  Lable,
  Input,
  SearchIcon,
  RemoveIcon,
  LangBar,
  WrapperLang,
  Lang,
  ArrowDown,
  ArrowUp,
} from './AppBar.styled';

const languages = ['UK', 'EN'];

export const AppBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [input, setInput] = useState('');

  const handleOpenLangBar = () => setIsOpenMenu(!isOpenMenu);
  const handleCahgeInput = e => setInput(e.target.value);
  const clearInput = () => setInput('');

  return (
    <Header>
      <Container>
        <Logo to="/"> Event Planner</Logo>
        <Lable>
          <SearchIcon />
          <Input
            type="text"
            name="search"
            value={input}
            placeholder="Search by keywords"
            onChange={handleCahgeInput}
          />
          {input !== '' && <RemoveIcon onClick={clearInput} />}
        </Lable>

        <LangBar>
          <WrapperLang>
            <Lang>UK</Lang>

            {!isOpenMenu ? (
              <ArrowDown onClick={handleOpenLangBar} />
            ) : (
              <ArrowUp onClick={handleOpenLangBar} />
            )}
          </WrapperLang>
          {isOpenMenu && <LangMenu languages={languages} />}
        </LangBar>
      </Container>
    </Header>
  );
};
