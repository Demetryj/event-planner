import { PaginationElement } from './PaginationCount.styled';

export const PaginationCount = ({ handleChange, page, count }) => {
  return (
    <PaginationElement
      count={count}
      siblingCount={0}
      page={page}
      onChange={handleChange}
    />
  );
};
