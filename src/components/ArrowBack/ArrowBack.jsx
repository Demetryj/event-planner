import { useLocation } from 'react-router-dom';
import { Wrapper, Text } from './ArrowBack.styled';
import { GoArrowLeft } from 'react-icons/go';

export const ArrowBack = () => {
  const location = useLocation();

  return (
    <Wrapper to={location.state?.from ?? '/'}>
      <GoArrowLeft />
      <Text>Back</Text>
    </Wrapper>
  );
};
