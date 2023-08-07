import { createSelector } from '@reduxjs/toolkit';
import { selectEvents } from 'redux/events/selectors';
export const selectSearch = state => state.filter.search;

export const selectVisibleEvents = createSelector(
  [selectEvents, selectSearch],
  (events, search) => {
    const normalyzeFilter = search.toLowerCase();

    const visibleEvents = events.filter(
      event =>
        event.title.toLowerCase().includes(normalyzeFilter) ||
        event.description.toLowerCase().includes(normalyzeFilter)
    );

    return visibleEvents;
  }
);
