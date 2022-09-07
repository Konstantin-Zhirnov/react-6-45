import React from 'react'
import cn from 'classnames'

import { useAppSelector } from '../../redux/hooks'
import { getChampion, getSelected, getVictory } from '../../redux/lotto'

import noMoney from '../../images/noMoney.png'
import money from '../../images/money.png'

import classes from './ResultScreen.module.sass'

const ResultScreen: React.FC = React.memo(() => {
  const isChampion = useAppSelector(getChampion)
  const selected = useAppSelector(getSelected)
  const victory = useAppSelector(getVictory)

  return (
    <div className={classes.container}>
      <div className={classes.result}>
        <div className={classes.result_top}>
          <p className={classes.result_top_text}>You choosed:</p>
          <p className={classes.result_top_number}>
            {selected.length === 6 ? selected.join(', ') : 'You need to choose 6 numbers!'}
          </p>
        </div>

        <div className={classes.result_bottom}>
          <div className={classes.line} />
          <p className={classes.result_bottom_text}>Dropped out:</p>
          <div className={classes.result_bottom_box}>
            {victory.map((item, index) => (
              <div
                key={index}
                className={cn(
                  classes.result_bottom_number,
                  classes[`number_` + (index + 1)],
                  classes.anim,
                )}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        className={cn(classes.present, classes.anim)}
        src={isChampion ? money : noMoney}
        alt=""
      />
    </div>
  )
})

export default ResultScreen
