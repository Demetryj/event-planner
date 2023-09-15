import { createRef } from 'react';
import { nanoid } from 'nanoid';
import { Fragment } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';
import { BsArrowDownShort } from 'react-icons/bs';
import { useClickOutside } from 'hooks/useClickOutside';
import { translateData } from 'utils/translateData';
import {
  WrapperMenu,
  WrapperHead,
  FilterList,
  FilterItem,
  FilterName,
} from './FilterMenu.styled';

export const FilterMenu = ({
  children,
  array,
  variant,
  onClick,
  onChooseCategory,
  chooseSortBy,
}) => {
  const refMenu = createRef(null);

  useClickOutside(refMenu, () => {
    onClick(false);
  });

  return (
    <WrapperMenu variant={variant} ref={refMenu}>
      <WrapperHead variant={variant} onClick={onClick}>
        {children}
      </WrapperHead>

      {!variant ? (
        <FilterList>
          {array.map(item => (
            <FilterItem
              key={nanoid()}
              variant={variant}
              onClick={onChooseCategory}
              data-action={`${translateData(item)}`}
            >
              <FilterName>{item}</FilterName>
            </FilterItem>
          ))}
        </FilterList>
      ) : (
        <FilterList>
          {array.map(item => (
            <Fragment key={nanoid()}>
              <FilterItem
                key={nanoid()}
                variant={variant}
                onClick={chooseSortBy}
                data-action={`${translateData(item)} up`}
              >
                <FilterName>{item}</FilterName>
                <BsArrowUpShort />
              </FilterItem>
              <FilterItem
                key={nanoid()}
                variant={variant}
                onClick={chooseSortBy}
                data-action={`${translateData(item)} down`}
              >
                <FilterName>{item}</FilterName>
                <BsArrowDownShort />
              </FilterItem>
            </Fragment>
          ))}
        </FilterList>
      )}
    </WrapperMenu>
  );
};
