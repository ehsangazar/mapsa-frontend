import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import quizSlice from './quizSlice'
import upSlice from './upSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quiz: quizSlice,
    up: upSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch