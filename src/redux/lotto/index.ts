import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store'

interface StateType {
  isChecked: boolean
  selected: number[]
  victory: number[]
}

const initialState: StateType = {
  isChecked: false,
  selected: [],
  victory: [],
}

export const lotto = createSlice({
  name: 'lotto',
  initialState,
  reducers: {
    setFieldSelection: (state, action: PayloadAction<number>) => {
      if (state.selected.includes(action.payload)) {
        state.selected = state.selected.filter((field) => field !== action.payload)
      } else {
        state.selected.push(action.payload)
      }
    },
    setVictory: (state, action: PayloadAction<number[]>) => {
      state.isChecked = true
      state.victory = action.payload
    },
    reset: (state) => {
      state.isChecked = false
      state.selected = []
      state.victory = []
    },
  },
})

export const { setFieldSelection, setVictory, reset } = lotto.actions

export const getChecked = (state: RootState): boolean => state.lotto.isChecked
export const getSelected = (state: RootState): number[] => state.lotto.selected
export const getVictory = (state: RootState): number[] => state.lotto.victory

export default lotto.reducer
