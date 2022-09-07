import React from 'react'

import { useAppDispatch } from '../redux/hooks'
import { reset } from '../redux/lotto'

import Button from './Button'

const ResetButton: React.FC = React.memo(() => {
  const dispatch = useAppDispatch()

  const onReset = () => {
    dispatch(reset())
  }

  return <Button text="Reset" onClick={onReset} />
})

export default ResetButton
