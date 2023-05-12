import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { makeId } from '../../app/functions';
import type { RootState } from '../../app/store';
import mockData from './HALLS-MOCK_DATA.json';

interface HallData {
  id: string;
  name: string;
  renterName: string;
  previewImage: string;
  renterLogo: string;
  capacity: number;
  price: number;
  rating: number;
  loves: number;
  views: number;
}

interface RentalState {
  rentals: HallData[];
}

const initialState: RentalState = {
  rentals: mockData.map((rental) => ({
    id: makeId(),
    ...rental,
  })),
};

interface UpdateRentalPropertyPayload<K extends keyof HallData> {
  id: string;
  property: K;
  value: HallData[K];
}

const rentalSlice = createSlice({
  name: 'rentals',
  initialState,
  reducers: {
    addRental: (state, action: PayloadAction<HallData>) => ({
      ...state,
      rentals: state.rentals.concat(action.payload),
    }),
    removeRental: (state, action: PayloadAction<string>) => {
      const index = state.rentals.findIndex(
        (rental) => rental.id === action.payload,
      );
      if (index !== -1) {
        return {
          ...state,
          rentals: state.rentals
            .slice(0, index)
            .concat(state.rentals.slice(index + 1)),
        };
      }
      return state;
    },
    updateRental: (state, action: PayloadAction<HallData>) => {
      const index = state.rentals.findIndex(
        (rental) => rental.id === action.payload.id,
      );
      if (index !== -1) {
        return {
          ...state,
          rentals: [
            ...state.rentals.slice(0, index),
            action.payload,
            ...state.rentals.slice(index + 1),
          ],
        };
      }
      return state;
    },
    incrementLove: (state, action: PayloadAction<string>) => {
      const index = state.rentals.findIndex(
        (rental) => rental.id === action.payload,
      );
      if (index !== -1) {
        return {
          ...state,
          rentals: [
            ...state.rentals.slice(0, index),
            {
              ...state.rentals[index],
              loves: state.rentals[index].loves + 1,
            },
            ...state.rentals.slice(index + 1),
          ],
        };
      }
      return state;
    },
    incrementView: (state, action: PayloadAction<string>) => {
      const index = state.rentals.findIndex(
        (rental) => rental.id === action.payload,
      );
      if (index !== -1) {
        state.rentals[index].views += 1;
      }
    },
    // Update a specific property of a rental
    /**
     * we've added a generic type parameter K that extends keyof hallData,
     * which means it can only be one of the keys defined in the hallData interface. Then, we've updated the type of property to K and the type of value to hallData[K], which means
     * that the value of value must match the type of the property being updated.
     */
    // updateRentalProperty: <K extends keyof HallData>(
    //   state: HallData[],
    //   action: PayloadAction<{
    //     id: string;
    //     property: K;
    //     value: HallData[K];
    //   }>,
    // ) => {
    //   const { id, property, value } = action.payload;
    //   const index = state.findIndex((rental) => rental.id === id);

    //   if (index !== -1) {
    //     // Create a copy of the rental object with the updated property
    //     const updatedRental = { ...state[index], [property]: value };

    //     // Create a new array with the updated rental object
    //     const newState = [
    //       ...state.slice(0, index),
    //       updatedRental,
    //       ...state.slice(index + 1),
    //     ];

    //     return newState;
    //   }

    //   return state;
    // },
  },
});

export const {
  addRental,
  removeRental,
  updateRental,
  incrementLove,
  incrementView,
  // updateRentalProperty,
} = rentalSlice.actions;

export const selectRentals = (state: RootState) => state.rentals;

export default rentalSlice.reducer;
