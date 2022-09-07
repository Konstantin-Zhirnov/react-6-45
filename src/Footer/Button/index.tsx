import React from 'react'
import cn from 'classnames'

import { useAppSelector } from '../../redux/hooks'
import { getChecked } from '../../redux/lotto'

import classes from './Button.module.sass'

interface IProps {
  text: string
  onClick: () => void
  disabled?: boolean
}

const Button: React.FC<IProps> = ({ text, onClick, disabled }) => {
  const isChecked = useAppSelector(getChecked)

  const getHide = (): boolean => {
    return (isChecked && text === 'Check') || (!isChecked && text === 'Reset')
  }

  return (
    <button
      className={cn(classes.container, {
        [`${classes.hide}`]: getHide(),
        [`${classes.disabled}`]: disabled,
      })}
      onClick={onClick}
      disabled={disabled || false}
    >
      {text}
    </button>
  )
}

export default Button
