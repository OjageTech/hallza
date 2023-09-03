import axios from 'axios';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

// import the search slice reducer
import searchSlice from '../features/search/search-slice';
import payoutTransactionSlice from '../features/transaction/payoutTransaction-slice';
import comissionTransactionSlice from '../features/transaction/comissionTransaction-slice';
import mainSidebarSlice from '../features/sidebar/main-slice';
import rentalSlice from '../features/hallsdata/hallsdata-slice';
import venuesSlice from '../features/venues/venues-slice';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    payoutTransaction: payoutTransactionSlice,
    comissionTransaction: comissionTransactionSlice,
    mainSidebar: mainSidebarSlice,
    rental: rentalSlice,
    venues: venuesSlice,
  },
});

// Export some helper types used to improve type-check
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
