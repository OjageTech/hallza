// venues-slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { makeId } from '../../app/functions';
import type { RootState } from '../../app/store';
import { venue } from '../../interfaces/venue';

// Define the initial state as an empty object
const initialState: Record<string, venue> = {};

const venuesSlice = createSlice({
  name: 'venues',
  initialState,
  reducers: {
    loadSuccess: (state, action) => {
      console.log('jioi');
      state.venue = action.payload; // Update the data with the preloaded data
      // state.error = 'Error'; // Reset the error message
    },
    loadFailure: (state, action) => {
      // state.data = {}; // Reset the data
      state.error = action.payload; // Update the error message with the failure message
    },
  },
});

const { actions } = venuesSlice;

export const { loadSuccess, loadFailure } = actions;

export default venuesSlice.reducer;
