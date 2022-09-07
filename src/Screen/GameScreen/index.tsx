import React from 'react'

import Field from './Field'

import classes from './GameScreen.module.sass'

const GameScreen: React.FC = React.memo(() => {
  return (
    <div className={classes.container}>
      <p className={classes.text__bottom}>Choose 6 numbers:</p>
      <div className={classes.game_box}>
        {Array(45)
          .fill(0)
          .map((_, index) => index + 1)
          .map((field) => (
            <Field key={field} field={field} />
          ))}
      </div>
    </div>
  )
})

export default GameScreen
