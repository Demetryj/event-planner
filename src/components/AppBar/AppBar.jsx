import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearch } from 'redux/filter/selectors';
import { changeFilter } from 'redux/filter/filterSlice';
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
  const searchValue = useSelector(selectSearch);
  const dispatch = useDispatch();

  const handleOpenLangBar = () => setIsOpenMenu(!isOpenMenu);
  const handleCahgeInput = e => dispatch(changeFilter(e.target.value));
  const clearInput = () => dispatch(changeFilter(''));

  return (
    <Header>
      <Container>
        <Logo to="/"> Event Planner</Logo>
        <Lable>
          <SearchIcon />
          <Input
            type="text"
            name="search"
            value={searchValue}
            placeholder="Search by keywords"
            autoComplete="off"
            onChange={handleCahgeInput}
          />
          {searchValue !== '' && <RemoveIcon onClick={clearInput} />}
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
