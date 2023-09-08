import { useSelector } from 'react-redux';
import { selectVisibleEvents } from 'redux/filter/selectors';
import { Box } from 'components/Box';
import { FilterBar } from 'components/FilterBar';
import { MainTitle } from 'components/MainTitle';
import { CardList } from 'components/CardList/CardList';

const Home = () => {
  const visibleEvents = useSelector(selectVisibleEvents);

  return (
    <>
      <Box
        display={{ lg: 'flex' }}
        flexDirection={{ lg: 'row-reverse' }}
        alignItems={{ lg: 'center' }}
        justifyContent={{ lg: 'space-between' }}
        mb={{ lg: 40 }}
      >
        <FilterBar />
        <MainTitle display="desktop">My events</MainTitle>
      </Box>

      {visibleEvents.length > 0 && <CardList />}
    </>
  );
};

export default Home;
