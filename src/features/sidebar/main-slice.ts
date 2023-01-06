import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface expandedState {
	value: boolean;
	activeItem: string
}

// Define the initial state using that type
const initialState: expandedState = {
  value: true,
  activeItem: 'Dashboard',
};

export const mainSidebarSlice = createSlice({
  name: 'mainSidebar',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleExpanded: (state) => {
      state.value = !state.value;
    },
    setActiveItem: (state, action: PayloadAction<string>) => {
      state.activeItem = action.payload;
    },
  },
});

export const { toggleExpanded, setActiveItem } = mainSidebarSlice.actions;

export default mainSidebarSlice.reducer;
