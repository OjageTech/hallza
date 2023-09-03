// venues-slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { makeId } from '../../app/functions';
import { getVenues } from '../api';
import { venue } from '../../interfaces/venue';

// Define the initial state as an empty object
const initialState = { data: {}, loading: false, error: '' };

const venuesSlice = createSlice({
  name: 'venues',
  initialState,
  reducers: {
    // Reducer for starting the job data fetch
    fetchVenueDataStart: (state) => {
      state.loading = true;
      state.error = 'no error';
    },

    // Reducer for successful venue data fetch
    fetchVenueDataSuccess: (state, action: PayloadAction<venue>) => {
      state.data = action.payload;
      state.loading = false;
    },

    // Reducer for failed venue data fetch
    fetchVenueDataFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

const { actions } = venuesSlice;
// Extract the action Creators
export const {
  fetchVenueDataStart,
  fetchVenueDataSuccess,
  fetchVenueDataFailure,
} = actions;

// Thunk action creator for fetching venues data
export const fetchVenuesData = () => async (dispatch: any) => {
  try {
    dispatch(fetchVenueDataStart());
    const venueData = await getVenues();
    dispatch(fetchVenueDataSuccess(venueData));
  } catch (error: any) {
    dispatch(fetchVenueDataFailure(error.message));
  }
};

export default venuesSlice.reducer;
