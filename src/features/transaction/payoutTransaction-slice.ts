import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { makeId } from '../../app/functions';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface payoutTransactionState {
  value: number[];
  type: string;
  id: string;
  date: string;
}

// Define the initial state using that type
const initialState: payoutTransactionState = {
  // Get this value from the backend and
  // if user is new, value is zero(has performed no payoutTransaction yet)
  value: [0, 2000, 12800, 15000, 8000],
  id: makeId(),
  type: 'Payout request',
  date: '25/11/2022',
};

/* eslint-disable no-param-reassign */
export const payoutTransactionSlice = createSlice({
  name: 'payoutTransaction',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addPayoutTransaction: (state, action: PayloadAction<number>) => {
      state.value.push(action.payload);
    },
    deleteLastPayoutTransaction: (state) => {
      state.value.pop();
    },
    deleteAllPayoutTransactions: (state) => {
      state.value = [0];
    },
  },
});

export const {
  addPayoutTransaction,
  deleteLastPayoutTransaction,
  deleteAllPayoutTransactions,
} = payoutTransactionSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectPayoutTransaction = (state: RootState) => state.payoutTransaction.value;

export default payoutTransactionSlice.reducer;
