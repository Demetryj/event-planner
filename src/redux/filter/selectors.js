import { createSelector } from '@reduxjs/toolkit';
import { selectEvents } from 'redux/events/selectors';
import { sortEventsByValue } from 'utils/sortEventsByValue';
export const selectSearch = state => state.filter.search;
export const selectCategory = state => state.filter.category;
export const selectSortBy = state => state.filter.sortBy;

export const selectVisibleEvents = createSelector(
  [selectEvents, selectSearch, selectCategory, selectSortBy],
  (events, search, categoryValue, sortBy) => {
    const normalyzeFilter = search.toLowerCase();

    let visibleEvents = events;

    if (categoryValue) {
      visibleEvents = events.filter(event => event.category === categoryValue);
    }

    if (search) {
      visibleEvents = events.filter(
        event =>
          event.title.toLowerCase().includes(normalyzeFilter) ||
          event.description.toLowerCase().includes(normalyzeFilter)
      );
    }

    if (sortBy) {
      visibleEvents = sortEventsByValue(events, sortBy);
    }

    return visibleEvents;
  }
);