import { Box } from 'components/Box';
import { FilterBar } from 'components/FilterBar';
import { MainTitle } from 'components/MainTitle';
import { CardList } from 'components/CardList';

const Home = () => {
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

      <CardList />
    </>
  );
};

export default Home;
