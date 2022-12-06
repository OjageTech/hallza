import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { makeId } from '../../app/functions';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface comissionTransactionState {
	value: number[];
	type: string;
	id: string;
	date: string;
}

// Define the initial state using that type
const initialState: comissionTransactionState = {
  // Get this value from the backend and
  // if user is new, value is zero(has performed no comissionTransaction yet)
  value: [0, 1000, 2000, 12815, 5000, 8000],
  id: makeId(),
  type: 'Comission request',
  date: '25/11/2022',
};

export const comissionTransactionSlice = createSlice({
  name: 'comissionTransaction',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addComissionTransaction: (
      state,
      action: PayloadAction<number>,
    ) => {
      state.value.push(action.payload);
    },
    deleteLastComissionTransaction: (state) => {
      state.value.pop();
    },
    deleteAllComissionTransactions: (state) => {
      state.value = [0];
    },
  },
});

export const {
  addComissionTransaction,
  deleteLastComissionTransaction,
  deleteAllComissionTransactions,
} = comissionTransactionSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectComissionTransaction = (state: RootState) => state.comissionTransaction.value;

export default comissionTransactionSlice.reducer;
