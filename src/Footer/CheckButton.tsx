import React from 'react'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setVictory, getSelected } from '../redux/lotto'

import Button from './Button'

const CheckButton: React.FC = React.memo(() => {
  const dispatch = useAppDispatch()
  const selected = useAppSelector(getSelected)

  const onResult = () => {
    const victoryArray: number[] = []
    while (victoryArray.length < 6) {
      const temp = Math.floor(Math.random() * 44) + 1
      if (victoryArray.indexOf(temp) === -1) {
        victoryArray.push(temp)
      }
    }

    // dispatch(setVictory([1, 2, 3, 4, 5, 6]))
    dispatch(setVictory(victoryArray))
  }

  return <Button text="Check" onClick={onResult} disabled={selected.length !== 6} />
})

export default CheckButton
