import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlinePlus } from 'react-icons/hi';
import { CiFilter } from 'react-icons/ci';
import { LiaSlidersHSolid } from 'react-icons/lia';
import { Sort } from 'components/Sort';
import { FilterMenu } from 'components/FilterMenu/FilterMenu';
import { category, sortBy } from 'data/menuFilter';
import { useMedia } from 'hooks/useMedia';
import { chooseCategory, sortByValue } from 'redux/filter/filterSlice';
import { selectCategory } from 'redux/filter/selectors';
import { WrapperBar, BtnAdd, TextBtn } from './FilterBar.styled';

export const FilterBar = () => {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const { isMobile } = useMedia();
  const location = useLocation();
  const dispach = useDispatch();
  const selectedСategory = useSelector(selectCategory);

  const handleClickSort = () => {
    setIsOpenCategory(false);
    setIsOpenSort(!isOpenSort);
  };

  const handleClickCategory = () => {
    setIsOpenSort(false);
    setIsOpenCategory(!isOpenCategory);
  };

  const handleChooseCategory = e => {
    dispach(chooseCategory(e.currentTarget.textContent));
    setIsOpenCategory(false);
  };

  const handleChooseSortBy = e => {
    dispach(sortByValue(e.currentTarget.dataset.action));
    setIsOpenSort(false);
  };

  return (
    <WrapperBar isOpenSort={isOpenSort}>
      {!isOpenCategory ? (
        <Sort onClick={handleClickCategory}>
          <p>{selectedСategory ? selectedСategory : 'Category'}</p>
          <CiFilter />
        </Sort>
      ) : (
        <FilterMenu
          array={category}
          onClick={handleClickCategory}
          onChooseCategory={handleChooseCategory}
        >
          <p>{selectedСategory ? selectedСategory : 'Category'}</p>
          <CiFilter />
        </FilterMenu>
      )}

      {!isOpenSort ? (
        <Sort onClick={handleClickSort}>
          <p>Sort By</p>
          <LiaSlidersHSolid />
        </Sort>
      ) : (
        <FilterMenu
          array={sortBy}
          variant="sortBy"
          onClick={handleClickSort}
          chooseSortBy={handleChooseSortBy}
        >
          {isMobile && <LiaSlidersHSolid />}
          <p>Sort By</p>
          {!isMobile && <LiaSlidersHSolid />}
        </FilterMenu>
      )}

      <Link to="/create-event" state={{ from: location }}>
        <BtnAdd type="button">
          <HiOutlinePlus size={24} color="white" />
          <TextBtn>Add new event</TextBtn>
        </BtnAdd>
      </Link>
    </WrapperBar>
  );
};
