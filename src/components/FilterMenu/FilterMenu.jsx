import { nanoid } from 'nanoid';
import { Fragment } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';
import { BsArrowDownShort } from 'react-icons/bs';
import {
  WrapperMenu,
  WrapperHead,
  FilterList,
  FilterItem,
  FilterName,
} from './FilterMenu.styled';

export const FilterMenu = ({ children, array, variant }) => {
  return (
    <WrapperMenu variant={variant}>
      <WrapperHead variant={variant}>{children}</WrapperHead>

      {!variant ? (
        <FilterList>
          {array.map(item => (
            <FilterItem key={nanoid()} variant={variant}>
              <FilterName>{item}</FilterName>
            </FilterItem>
          ))}
        </FilterList>
      ) : (
        <FilterList>
          {array.map(item => (
            <Fragment key={nanoid()}>
              <FilterItem key={nanoid()} variant={variant}>
                <FilterName>{item}</FilterName>
                <BsArrowUpShort />
              </FilterItem>
              <FilterItem key={nanoid()} variant={variant}>
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
