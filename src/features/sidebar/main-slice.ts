import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// Define a type for the slice state
interface expandedState {
	value: boolean;
}

// Define the initial state using that type
const initialState: expandedState = {
	value: true,
};

export const mainSidebarSlice = createSlice({
	name: 'mainSidebar',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		toggleExpanded: (state) => {
            state.value = !state.value;
        },
	},
});

export const { toggleExpanded } = mainSidebarSlice.actions;

export default mainSidebarSlice.reducer;
