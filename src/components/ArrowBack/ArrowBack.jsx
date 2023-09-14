import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Wrapper, Text } from './ArrowBack.styled';
import { GoArrowLeft } from 'react-icons/go';

export const ArrowBack = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <Wrapper to={location.state?.from ?? '/'}>
      <GoArrowLeft />
      <Text>{t('arrowBack')}</Text>
    </Wrapper>
  );
};
