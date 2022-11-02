// import { configureStore } from '@reduxjs/toolkit'
// // ...

import { createStore } from 'redux';

// const store = configureStore({
//   reducer: {
//     posts: postsReducer,
//     comments: commentsReducer,
//     users: usersReducer
//   }
// })

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

const initialState = {
  value: 0,
};

function counterReducer(state = initialState, action: { type: any; }) {
  switch (action.type) {
    case 'counter/incremented':
      return { ...state, value: state.value + 1 };
    case 'counter/decremented':
      return { ...state, value: state.value - 1 };

    default:
      return state;
  }
}

export const store = createStore(counterReducer);
