import { configureStore } from '@reduxjs/toolkit'

import lottoReducer from './lotto'

export const store = configureStore({
  reducer: {
    lotto: lottoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
