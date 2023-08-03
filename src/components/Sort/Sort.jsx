import { Wrapper } from './Sort.styled';

export const Sort = ({ children, onClick }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};
