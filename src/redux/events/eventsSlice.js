import { createSlice } from '@reduxjs/toolkit';
import { events } from 'data/dataEvents';

export const EventsSlice = createSlice({
  name: 'events',
  initialState: { items: [...events] },
  reducers: {
    addEvent(state, action) {
      state.items.push(action.payload);
    },

    updateEvent(state, action) {
      const index = state.items.findIndex(
        oneEvent => oneEvent.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },

    deleteEvent(state, action) {
      const index = state.items.findIndex(
        oneEvent => oneEvent.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addEvent, updateEvent, deleteEvent } = EventsSlice.actions;
export const eventsReducer = EventsSlice.reducer;
