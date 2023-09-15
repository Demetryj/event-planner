import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HiOutlinePlus } from 'react-icons/hi';
import { CiFilter } from 'react-icons/ci';
import { LiaSlidersHSolid } from 'react-icons/lia';
import { Sort } from 'components/Sort';
import { FilterMenu } from 'components/FilterMenu/FilterMenu';
import { useMedia } from 'hooks/useMedia';
import { chooseCategory, sortByValue } from 'redux/filter/filterSlice';
import { selectCategory } from 'redux/filter/selectors';
import { WrapperBar, BtnAdd, TextBtn } from './FilterBar.styled';

export const FilterBar = ({ resetPagination }) => {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const { isMobile } = useMedia();
  const location = useLocation();
  const dispatch = useDispatch();
  const selectedСategory = useSelector(selectCategory);

  const { t } = useTranslation();
  const categoryList = t('categoryList', { returnObjects: true });
  const sortByList = t('sortByList', { returnObjects: true });

  const handleClickSort = () => {
    setIsOpenCategory(false);
    setIsOpenSort(!isOpenSort);
  };

  const handleClickCategory = () => {
    setIsOpenSort(false);
    setIsOpenCategory(!isOpenCategory);
  };

  const handleChooseCategory = e => {
    dispatch(chooseCategory(e.currentTarget.dataset.action));
    setIsOpenCategory(false);
    dispatch(sortByValue(''));
    resetPagination(1);
  };

  const handleChooseSortBy = e => {
    dispatch(sortByValue(e.currentTarget.dataset.action));
    setIsOpenSort(false);
    dispatch(chooseCategory(''));
    resetPagination(1);
  };

  return (
    <WrapperBar isOpenSort={isOpenSort}>
      {!isOpenCategory ? (
        <Sort onClick={handleClickCategory}>
          {selectedСategory ? (
            <p>{selectedСategory}</p>
          ) : (
            <p>{t('filterBar.category')}</p>
          )}
          <CiFilter />
        </Sort>
      ) : (
        <FilterMenu
          array={categoryList}
          onClick={handleClickCategory}
          onChooseCategory={handleChooseCategory}
        >
          {selectedСategory ? (
            <p>{selectedСategory}</p>
          ) : (
            <p>{t('filterBar.category')}</p>
          )}
          <CiFilter />
        </FilterMenu>
      )}

      {!isOpenSort ? (
        <Sort onClick={handleClickSort}>
          <p>{t('filterBar.sortBy')}</p>
          <LiaSlidersHSolid />
        </Sort>
      ) : (
        <FilterMenu
          array={sortByList}
          variant="sortBy"
          onClick={handleClickSort}
          chooseSortBy={handleChooseSortBy}
        >
          {isMobile && <LiaSlidersHSolid />}
          <p>{t('filterBar.sortBy')}</p>
          {!isMobile && <LiaSlidersHSolid />}
        </FilterMenu>
      )}

      <Link to="/create-event" state={{ from: location }}>
        <BtnAdd type="button">
          <HiOutlinePlus size={24} color="white" />
          <TextBtn>{t('filterBar.addEvent')}</TextBtn>
        </BtnAdd>
      </Link>
    </WrapperBar>
  );
};
