import React from 'react'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setChampion, setCheckedTrue, setVictory, getSelected } from '../redux/lotto'

import Button from './Button'

const CheckButton: React.FC = React.memo(() => {
  const dispatch = useAppDispatch()
  const selected = useAppSelector(getSelected)

  const onResult = () => {
    dispatch(setCheckedTrue())
    dispatch(setVictory())
    dispatch(setChampion())
  }

  return <Button text="Check" onClick={onResult} disabled={selected.length !== 6} />
})

export default CheckButton
