import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectSearch } from 'redux/filter/selectors';
import {
  changeFilter,
  chooseCategory,
  sortByValue,
} from 'redux/filter/filterSlice';

import { LangBar } from 'components/LangBar';
import {
  Header,
  Container,
  Logo,
  Lable,
  Input,
  SearchIcon,
  RemoveIcon,
} from './AppBar.styled';

export const AppBar = () => {
  const searchValue = useSelector(selectSearch);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleCahgeInput = e => {
    dispatch(changeFilter(e.target.value));
    dispatch(sortByValue(''));
    dispatch(chooseCategory(''));
  };
  const clearInput = () => dispatch(changeFilter(''));
  const resetFilter = () => {
    dispatch(chooseCategory(''));
    dispatch(sortByValue(''));
    dispatch(changeFilter(''));
  };

  return (
    <Header>
      <Container>
        <Logo to="/" onClick={resetFilter}>
          Event Planner
        </Logo>
        <Lable>
          <SearchIcon />
          <Input
            type="text"
            name="search"
            value={searchValue}
            placeholder={t('header.search')}
            autoComplete="off"
            onChange={handleCahgeInput}
          />
          {searchValue !== '' && <RemoveIcon onClick={clearInput} />}
        </Lable>

        <LangBar />
      </Container>
    </Header>
  );
};
