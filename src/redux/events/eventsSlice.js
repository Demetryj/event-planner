import { createSlice } from '@reduxjs/toolkit';
import { events } from 'data/dataEvents';

export const EventsSlice = createSlice({
  name: 'events',
  initialState: events,
  reducers: {
    addEvent(state, action) {
      return;
    },
  },
});

export const { addEvent } = EventsSlice.actions;
export const eventsReducer = EventsSlice.reducer;
