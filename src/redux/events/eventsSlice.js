import { createSlice } from '@reduxjs/toolkit';
import { events } from 'data/dataEvents';

export const EventsSlice = createSlice({
  name: 'events',
  initialState: [...events],
  reducers: {
    addEvent(state, action) {
      return;
    },
    deleteEvent(state, action) {
      const index = state.findIndex(oneEvent => oneEvent.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addEvent, deleteEvent } = EventsSlice.actions;
export const eventsReducer = EventsSlice.reducer;
