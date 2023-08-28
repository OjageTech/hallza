import axios from 'axios';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import the search slice reducer
import searchSlice from '../features/search/search-slice';
import payoutTransactionSlice from '../features/transaction/payoutTransaction-slice';
import comissionTransactionSlice from '../features/transaction/comissionTransaction-slice';
import mainSidebarSlice from '../features/sidebar/main-slice';
import rentalSlice from '../features/hallsdata/hallsdata-slice';

const rootReducer = combineReducers({
  search: searchSlice,
    payoutTransaction: payoutTransactionSlice,
    comissionTransaction: comissionTransactionSlice,
    mainSidebar: mainSidebarSlice,
    rental: rentalSlice,
})
export const configureStoreAsync = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:3000/venues')
    .then((response) => {
      const preloadedState = response.data;
      const store = configureStore({ reducer: rootReducer, preloadedState });
      resolve(store);
    })
    .catch((error) => {
      reject(error);
    });
});

// Create the store, adding the search slice to it
export const store:any = configureStore({
  reducer: {
    search: searchSlice,
    payoutTransaction: payoutTransactionSlice,
    comissionTransaction: comissionTransactionSlice,
    mainSidebar: mainSidebarSlice,
    rental: rentalSlice,
  },
});

// Export some helper types used to improve type-checking
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
