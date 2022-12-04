import { configureStore } from '@reduxjs/toolkit';

// import the search slice reducer
import searchSlice from '../features/search/search-slice';
import payoutTransactionSlice from '../features/transaction/payoutTransaction-slice';
import comissionTransactionSlice from '../features/transaction/comissionTransaction-slice';

// Create the store, adding the search slice to it
export const store = configureStore({
  reducer: {
    search: searchSlice,
    payoutTransaction: payoutTransactionSlice,
    comissionTransaction: comissionTransactionSlice,

  },
});

// Export some helper types used to improve type-checking
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
