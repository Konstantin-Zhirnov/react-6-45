import React from 'react'
import cn from 'classnames'

import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { getSelected, setFieldSelection } from '../../../redux/lotto'

import classes from './Field.module.sass'

interface IProps {
  field: number
}

const Field: React.FC<IProps> = React.memo(({ field }) => {
  const dispatch = useAppDispatch()
  const selected = useAppSelector(getSelected)

  const handleClick = () => {
    dispatch(setFieldSelection(field))
  }

  return (
    <b
      onClick={handleClick}
      className={cn(classes.field, { [`${classes.yellow}`]: selected.includes(field) })}
    >
      {field}
    </b>
  )
})

export default Field
