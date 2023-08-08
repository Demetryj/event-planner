import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import { Section, Container } from './SharedLayout.syled';

export const SharedLayout = () => {
  const location = useLocation();

  return (
    <>
      <AppBar />
      <main>
        <Section>
          <Container location={location.pathname}>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
    </>
  );
};
