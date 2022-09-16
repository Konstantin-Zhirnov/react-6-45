import React from 'react'

import { useAppSelector } from '../redux/hooks'
import { getChecked } from '../redux/lotto'

import Footer from './Footer'
import ResultScreen from './ResultScreen'
import GameScreen from './GameScreen'

import classes from './Screen.module.sass'

const Screen: React.FC = React.memo(() => {
  const isChecked = useAppSelector(getChecked)

  return (
    <div className={classes.container}>
      {!isChecked ? <GameScreen /> : <ResultScreen />}
      <Footer />
    </div>
  )
})

export default Screen
