/* eslint-disable indent */
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

const rootReducer = combineReducers({
  search: searchSlice,
  payoutTransaction: payoutTransactionSlice,
  comissionTransaction: comissionTransactionSlice,
  mainSidebar: mainSidebarSlice,
  rental: rentalSlice,
  venues: venuesSlice,
});

// Define the types for Redux store and async actions
type RootState = ReturnType<typeof rootReducer>;
// eslint-disable-next-line no-use-before-define
type AppDispatch = typeof store.dispatch;
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// eslint-disable-next-line import/no-mutable-exports
let store = configureStore({
  reducer: rootReducer,
});

export const configureStoreAsync = () => new Promise((resolve, reject) => {
try {
    fetch('http://localhost:3000/venues')
    .then((r) => r.json())
    .then((preloadedState) => {
    store = configureStore({ reducer: rootReducer, preloadedState });

    resolve(store);
    });
  } catch (error: any) {
    console.log(error);
  }
  });

// Export the store
export { store };

// Export some helper types used to improve type-checking
export type { AppDispatch, RootState };
