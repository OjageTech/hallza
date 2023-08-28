import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { makeId } from '../../app/functions';
import type { RootState } from '../../app/store';
import { venue } from '../../interfaces/venue';

const initialState = {};
const venuesSlice = createSlice({
  name: 'venues',
  initialState,
  reducers: {},
});
const { actions } = venuesSlice;

export default venuesSlice.reducer;
