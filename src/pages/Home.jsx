import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectVisibleEvents } from 'redux/filter/selectors';
import { Box } from 'components/Box';
import { FilterBar } from 'components/FilterBar';
import { MainTitle } from 'components/MainTitle';
import { CardList } from 'components/CardList/CardList';
import { PaginationCount } from 'components/PaginationCount';
import { countPagination } from 'utils/countPagination';

const per_page = 8;

const Home = () => {
  const events = useSelector(selectVisibleEvents);
  const total = events.length;
  const [page, setPage] = useState(1);
  const [visibleEvents, setVisibleEvents] = useState(events);

  const { t } = useTranslation();

  useEffect(() => {
    setVisibleEvents(events.slice(0, per_page));
  }, [events]);

  const handleChange = (event, value) => {
    if (value === page) {
      return;
    }

    setPage(value);
    countPagination(events, value, per_page, setVisibleEvents);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Box
        display={{ lg: 'flex' }}
        flexDirection={{ lg: 'row-reverse' }}
        alignItems={{ lg: 'center' }}
        justifyContent={{ lg: 'space-between' }}
        mb={{ lg: 40 }}
      >
        <FilterBar resetPagination={setPage} />
        <MainTitle display="desktop">{t('mainTitles.myEvents')}</MainTitle>
      </Box>

      {visibleEvents.length > 0 && <CardList visibleEvents={visibleEvents} />}

      {visibleEvents.length > 0 && (
        <PaginationCount
          page={page}
          count={Math.ceil(total / per_page)}
          handleChange={handleChange}
        />
      )}
    </>
  );
};

export default Home;
