import { PaginationElement } from './PaginationCount.styled';
import { useMedia } from 'hooks/useMedia';

export const PaginationCount = ({ handleChange, page, count }) => {
  const { isMobile } = useMedia();

  return (
    <PaginationElement
      count={count}
      siblingCount={isMobile ? -1 : 0}
      page={page}
      onChange={handleChange}
    />
  );
};
