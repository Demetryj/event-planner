import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

const HomePage = lazy(() => import('pages/Home'));
const CreatePage = lazy(() => import('pages/CreateEvent'));
const EventPage = lazy(() => import('pages/Event'));
const EditPage = lazy(() => import('pages/EditEvent'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/create-event" element={<CreatePage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/edit-event" element={<EditPage />} />
      </Route>
    </Routes>
  );
};