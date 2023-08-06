import { Title } from './MainTitle.styled';

export const MainTitle = ({ children, display }) => {
  return <Title display={display}>{children}</Title>;
};
