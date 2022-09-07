import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store'

interface StateType {
  selected: number[]
  isChecked: boolean
  isChampion: boolean
  victory: number[]
}

const initialState: StateType = {
  selected: [],
  isChecked: false,
  isChampion: false,
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
    resetSelection: (state) => {
      state.selected = []
    },
    setVictory: (state) => {
      const victory = [...state.victory]
      while (victory.length < 6) {
        const temp = Math.floor(Math.random() * 44) + 1
        if (victory.indexOf(temp) === -1) {
          victory.push(temp)
        }
      }
      state.victory = [...victory]
    },
    setCheckedTrue: (state) => {
      state.isChecked = true
    },
    reset: (state) => {
      state.isChecked = false
      state.isChampion = false
      state.selected = []
      state.victory = []
    },
    setChampion: (state) => {
      const result = [...state.selected]
      const victory = [...state.victory]
      const r = result.sort().join('')
      const v = victory.sort().join('')
      if (r === v) {
        return { ...state, isChampion: true }
      } else {
        return { ...state, isChampion: false }
      }
    },
  },
})

export const { setFieldSelection, resetSelection, setVictory, setCheckedTrue, reset, setChampion } =
  lotto.actions

export const getChecked = (state: RootState): boolean => state.lotto.isChecked
export const getChampion = (state: RootState): boolean => state.lotto.isChampion
export const getSelected = (state: RootState): number[] => state.lotto.selected
export const getVictory = (state: RootState): number[] => state.lotto.victory

export default lotto.reducer
