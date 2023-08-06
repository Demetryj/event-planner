import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlinePlus } from 'react-icons/hi';
import { CiFilter } from 'react-icons/ci';
import { LiaSlidersHSolid } from 'react-icons/lia';
import { Sort } from 'components/Sort';
import { FilterMenu } from 'components/FilterMenu/FilterMenu';
import { category, sortBy } from 'data/menuFilter';
import { useMedia } from 'hooks/useMedia';
import { WrapperBar, Text, BtnAdd, TextBtn } from './FilterBar.styled';

export const FilterBar = () => {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const { isMobile } = useMedia();
  const location = useLocation();

  const handleClickSort = () => setIsOpenSort(!isOpenSort);
  const handleClickCategory = () => setIsOpenCategory(!isOpenCategory);

  return (
    <WrapperBar isOpenSort={isOpenSort}>
      {!isOpenCategory ? (
        <Sort onClick={handleClickCategory}>
          <Text>Category</Text>
          <CiFilter />
        </Sort>
      ) : (
        <FilterMenu array={category}>
          <p>Category</p>
          <CiFilter />
        </FilterMenu>
      )}

      {!isOpenSort ? (
        <Sort onClick={handleClickSort}>
          <Text>Sort By</Text>
          <LiaSlidersHSolid />
        </Sort>
      ) : (
        <FilterMenu array={sortBy} variant="sortBy">
          {isMobile && <LiaSlidersHSolid />}
          <p>Sort by</p>
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
